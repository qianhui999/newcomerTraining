<?php

namespace app\controller;

header('Access-Control-Allow-Origin:*');

use think\facade\Db;
use app\BaseController;
use think\facade\Request;

class Index extends BaseController
{
    // 设置当前模型对应的完整数据表名称
    protected $table = 'pedding';

    // 设置当前模型的数据库连接
    protected $connection = 'first';

    public function index()
    {
        return json('hello');
    }

    public function hello()
    {
        $name = Request::param('name');
        $tel = Request::param('tel');
        $bus = Request::param('bus');
        $permit = Request::param('permit');
        $auto = Request::param('auto');
        $list = Db::table('pedding')
            ->where([
                ['name', 'like', $name . '%'],
                ['tel', 'like', $tel . '%'],
                ['associated_enterprise', 'like', $bus . '%'],
                ['status', 'like', $auto . '%'],
                ['business_license', 'like', $permit . '%'],
            ])
            ->select();
        // $a = $res->content;
        return json($list);
    }
    public function searchEnd()
    {
        $name = Request::param('name');
        $tel = Request::param('tel');
        $bus = Request::param('bus');
        $list = Db::table('ending')
            ->where([
                ['name', 'like', $name . '%'],
                ['tel', 'like', $tel . '%'],
                ['associated_enterprise', 'like', $bus . '%']
            ])
            ->select();
        // $a = $res->content;
        return json($list);
    }
    public function del()
    {
        $id = Request::param('id');
        // $id = dump($this->request->param());
        $lines = explode(",", $id); //这里使用逗号分隔$str
        $list = Db::table('pedding')->delete($lines);
        return json($lines);
    }
    public function delOne()
    {
        $id = Request::param('id');
        $list = Db::table('pedding')->delete($id);
        return json($id);
    }
    public function addEnd()
    {
        $id = Request::param('id');
        $business_name = Request::param('business_name');
        $name = Request::param('name');
        $tel = Request::param('tel');
        $business_license = Request::param('business_license');
        $associated_enterprise = Request::param('associated_enterprise');
        $time = Request::param('auto');
        $data =  [
            'id' => $id ,
            'name' => $name,
            'business_name' => $business_name,
            'tel' => $tel,
            'business_license' => $business_license,
            'associated_enterprise' => $associated_enterprise,
            'time' => $time
        ];
        $list = Db::name('ending')->insert($data);
        return json($data);
    }
    public function pedding()
    {
        $queryAll = Db::table('pedding')->select();
        return $queryAll;
    }
    public function ending()
    {
        $queryAll = Db::table('ending')->select();
        return $queryAll;
    }
    public function pagingQuery()
    {
        $name = '';
        $tel = 15;
        $status = '成功';

        $list = Db::table('pedding')
            ->where([
                ['name', 'like', $name . '%'],
                ['tel', 'like', $tel . '%'],
                ['status', 'like', $status . '%'],
            ])
            ->select();

        return $list;
    }
}
