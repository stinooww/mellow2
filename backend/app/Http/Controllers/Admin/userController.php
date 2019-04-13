<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\CRUDController;
use App\Repositories\Admin\UserRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

}
