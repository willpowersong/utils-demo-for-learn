$(document).ready(function(){
	
	$("#but").click(function(){
		
		var l=$(".item").length;

		$.ajax({
        url: "./data.php",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        data: {"length":l},
        success: function (data) {
	            var i=1;
                var color=Math.floor(Math.random()*4+1);
                var bgd = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
                while(true){
                    if(data === null)
                        alert("全部加载完毕");
                    if(data[i]===undefined)
                        break;
                    // var x = document.createElement("div");
                    // x.attr=("class","item");
                    var $x = $("<div class='item'>"+data[i]+"</div>");
                    $("#lyric").append($x);
                    $x.css("background",bgd);
                    // document.body.appendChild(x);
                    i++;
                }

            },
                complete: function () {
                    ;
            }
        });
	});

});