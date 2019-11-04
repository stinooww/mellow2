<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\Admin\PortfolioRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\CRUDController;
use Illuminate\Support\Facades\DB;

class portfolioController extends CRUDController
{
    //
    public $repository;
    public function __construct(PortfolioRepository $repository)
    {
        $this->repository = $repository;
        $this->viewFolder = 'portfolio';
        $this->routName = 'portfolio';
    }
    public function create()
    {
        $data['types']=$this->repository->getTypes();
        return view($this->viewFolder . '.create', $data);
    }

    public function edit($id)
    {
        $data['item'] = $this->repository->find($id);
        $data['types']=$this->repository->getTypes();
        return view($this->viewFolder . '.edit', $data);
    }
    public function update(Request $request, $id)
    {
        $model=$this->repository->find($id);
        $this->repository->update($model, $request->all());
        $types = $request['categoryArray'];
        $model->types()->sync($types);
        return redirect()->route($this->routName. '.index');
    }

    public function mainimage(Request $request, $id){
        $response=$this->upload($request);
        DB::table('portfolios')
            ->where('id', $id)
            ->update(['mainImgUrl' => "$response"]);

    }
    public function carimage(Request $request, $id){
        $response=$this->upload($request);
        DB::table('portfolios')
            ->where('id', $id)
            ->update(['Carousel' => "$response"]);

    }
    public function thumbimage(Request $request, $id){
        $response=$this->upload($request);
        DB::table('portfolios')
            ->where('id', $id)
            ->update(['Thumbnail' => "$response"]);

    }
    public function smartimage(Request $request, $id){
        $response=$this->upload($request);
        DB::table('portfolios')
            ->where('id', $id)
            ->update(['Smartphone' => "$response"]);

    }

}
