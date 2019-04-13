<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\Admin\PortfolioRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\CRUDController;

class portfolioController extends CRUDController
{
    //
    public $repository;
    public function __construct(PortfolioRepository $repository)
    {
        $this->repository = $repository;
        $this->viewFolder = 'portfolio';
        $this->routeName = 'portfolio';
    }

}
