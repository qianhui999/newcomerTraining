<?php
namespace app\controller;
//使用门面类
use think\facade\Db;

class Database
{
    /**
     * 连接数据库:first(pedding表)
     */
    public function pedding()
    {
        $query = Db::connect('first') -> table('pedding') -> select();
        return json($query);
    }
}
