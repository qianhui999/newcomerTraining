<?php
namespace app\model;

use think\console\command\make\Model as MakeModel;
use think\model;

class UserModel extends Model{
    // 设置当前模型对应的完整数据表名称
    protected $table = 'first';
    
    // 设置当前模型的数据库连接
    protected $connection = 'pedding';
    // 模型初始化
    protected static function init()
    {
        //TODO:初始化内容
    }
}