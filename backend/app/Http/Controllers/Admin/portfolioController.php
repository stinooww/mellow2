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

}
