window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
};

var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var settings = {

    'basic': {

        'emission_rate': 50,
        'min_life': 3,
        'life_range': 2,
        'min_angle': 0,
        'angle_range': 360,
        'min_speed': 25,
        'speed_range': 15,
        'min_size': 3,
        'size_range': 2,
        'colour': '#82c4f5'
    }
};

var Particle = function(x, y, angle, speed, life, size) {

    // 粒子定位坐标
    this.pos = {
        x: x || 0,
        y: y || 0
    };

    // 设定一些属性值
    this.speed = speed || 5;
	this.life = life || 1;
    this.size = size || 2;
    this.lived = 0;

    // 粒子速率
    var radians = angle * Math.PI / 180;

    this.vel = {
        x: Math.cos(radians) * speed,
        y: -Math.sin(radians) * speed
    };
};

var Emitter = function(x, y, settings) {

    // 喷射口坐标
    this.pos = {
        x: x,
        y: y
    };

    // 初始化设置
    this.settings = settings;

    // 发射器粒子发射周期
    this.emission_delay = 1000 / settings.emission_rate;

    // 初始化参数
    this.last_update = 0;
    this.last_emission = 0;

    // 粒子发射对象
    this.particles = [];
};

Emitter.prototype.update = function() {

    // 如果是第一次更新就设置last_update的值
    if (!this.last_update) {
        this.last_update = Date.now();
        return;
    }

    // 捕捉现在的时间
    var time = Date.now();

    // dt为现在时间与初始时间的时间差
    var dt = time - this.last_update;

    // 将差值给粒子发射器的的上次喷射时间
    this.last_emission += dt;

    // 修正update的时间
	this.last_update = time;

    // 检查是否需要喷射粒子
    if (this.last_emission > this.emission_delay) {

        // 计算出需要喷射的例子
        var i = Math.floor(this.last_emission / this.emission_delay);

        // 喷射粒子后修正last_emission的值
        this.last_emission -= i * this.emission_delay;

        while (i--) {

            // 通过喷射器的设置计算粒子的特性
            this.particles.push(
                new Particle(
                    0,
                    0,
                    this.settings.min_angle + Math.random() * this.settings.angle_range,
                    this.settings.min_speed + Math.random() * this.settings.speed_range,
                    this.settings.min_life + Math.random() * this.settings.life_range,
                    this.settings.min_size + Math.random() * this.settings.size_range
                )
            );
        }
    }

    // 每秒修改dt值
    dt /= 1000;

    // 对存在的例子循环计算
    var i = this.particles.length;

    while (i--) {
        var particle = this.particles[i];
        // 跳过dead属性为true的例子
        if (particle.dead) {
            // 移除需要消失的例子
            this.particles.splice(i, 1);
            continue;   
        }

        // 为粒子添加新一秒的状态
        particle.lived += dt;
        // 检查粒子是否需要消失
        if (particle.lived >= particle.life) {
            particle.dead = true;
            continue;
        }

        // 计算粒子的新坐标
        particle.pos.x += particle.vel.x * dt;
		particle.pos.y += particle.vel.y * dt;

        // 绘制粒子
        ctx.fillStyle = this.settings.colour;
        var x = this.pos.x + particle.pos.x;
        var y = this.pos.y + particle.pos.y;

        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    }
};

var emitter = new Emitter(canvas.width / 2, canvas.height / 2, settings.basic);

function loop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    emitter.update();
    requestAnimFrame(loop);
}

loop();