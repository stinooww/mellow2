<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\CRUDController;
use App\Repositories\Admin\UserRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\ImageController;
use Illuminate\Support\Facades\DB;


class userController extends CRUDController
{
    //
    public $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
        $this->viewFolder = 'users';
        $this->routName = 'medewerkers';
    }

    public function image(Request $request, $id){
      $response=$this->upload($request);
        DB::table('users')
            ->where('id', $id)
            ->update(['imageUrl' => "$response"]);

    }


}
