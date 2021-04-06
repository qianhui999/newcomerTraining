<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\facade\Route;

Route::get('think', function () {
    return 'hello,ThinkPHP6!';
});

// Route::rule('new/:id','News/read');
Route::get('searchEnd', 'index/searchEnd');
Route::get('del', 'index/del');
Route::get('hello', 'index/hello');
Route::get('addEnd', 'index/addEnd');
Route::get('delOne', 'index/delOne');
Route::get('pedding', 'index/pedding');
Route::get('pedding', 'index/pedding');
Route::get('ending', 'index/ending');
Route::get('pagingQuery', 'index/pagingQuery');
