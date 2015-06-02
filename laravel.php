# laravel学习

# 创建项目
composer create-project laravel/laravel project

# 路由信息
app/Http/routes.php

# 数据库信息 project/.env
DB_HOST=localhost
DB_DATABASE=laravel5
DB_USERNAME=root
DB_PASSWORD=password

# 修改相关数据库信息
php artisan migrate

# 建立models
php artisan make:model Article
php artisan make:model Page

# 建表
# project/database/migrations
Schema::create('articles',function(){
	$table->increments('id');
	$table->string('title');
	$table->string('slug')->nullable();
	$table->text('body')->nullable();
	$table->integer('user_id');
	$table->timestapms();
)};
php artisan migrate

# 数据填充
project/database/seeds/PageTableSeeder.php
<?php
use Illuminate\Database\Seeder;
use App\Page;
class PageTableSeeder extends Seeder {
  public function run()
  {
    DB::table('pages')->delete();
    for ($i=0; $i < 10; $i++) {
      Page::create([
        'title'   => 'Title '.$i,
        'slug'    => 'first-page',
        'body'    => 'Body '.$i,
        'user_id' => 1,
      ]);
    }
  }
}
"修改databaseSeeder.php中的"
$this->call('UserTableSeeder');
composer dump-autoload
php artisan db:seed

# 分组路由
Route::group(['prefix' = > 'admin', 'namespace' => 'Admin'],function(){
	Route::get('/','AdminHomeController@index');
	Route::resource('pages', 'PagesController');
});

# 构建controller
php artisan make:controller Admin/AdminHomeController
# http://laravel-china.org/docs/5.0/controllers

# 视图文件
@extends('app')

@section('content')
@foreach ($variable as $key)
	<a href="{{ URL('admin/pages/create') }}" class="btn btn-lg btn-primary">新增</a>
	<form action="{{ URL('admin/pages/'.$page->id) }}" method="POST" style="display: inline;">
		<input type="hidden" name="_token" value="{{ csrf_token() }}">
	</form>
@endforeach
@endsection
