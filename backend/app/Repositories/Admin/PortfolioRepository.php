<?php
/**
 * Created by PhpStorm.
 * User: jonasvanloey
 * Date: 2019-03-10
 * Time: 20:39
 */

namespace App\Repositories\Admin;


use Illuminate\Support\Facades\DB;
use Torann\LaravelRepository\Repositories\AbstractRepository;

class PortfolioRepository extends AbstractRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    protected $model = \App\Portfolio::class;

    public function getTypes(){
       return DB::table('types')->get();

    }
}
