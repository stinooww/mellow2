<?php
/**
 * Created by PhpStorm.
 * User: jonasvanloey
 * Date: 2019-03-10
 * Time: 20:40
 */

namespace App\Repositories\Admin;


use Torann\LaravelRepository\Repositories\AbstractRepository;

class UserRepository extends AbstractRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    protected $model = \App\User::class;
}