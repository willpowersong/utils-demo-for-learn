# laravel(windows)

1. laravel 主要依赖 `composer` 产出了，创建laravel使用指令
> `compose create-project laravel/laravel project`
2. 对于迁移的项目，或者来自 github 的项目，首先更新依赖包，并且修改对应数据库信息`project/.env`
> `composer install`		# 更新依赖
> 使用 `php artisan migrate` 更新数据库信息
3. 创建 `models`, `controllers`
> `php artisan make:model modelName`
> `php artisan make:controller controllerName`
4. 运行 laravel 使用 `php artisan serve`