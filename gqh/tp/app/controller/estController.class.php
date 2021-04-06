<?php
namespace app\controller;
use app\BaseController;
header("Content-Type: text/html;charset=utf-8");
class TestController extends BaseController { 

    public function hello(){
        echo('厉害了我的哥！');
    }
}