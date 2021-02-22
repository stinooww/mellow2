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

class BlogRepository extends AbstractRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    protected $model = \App\Blog::class;

}