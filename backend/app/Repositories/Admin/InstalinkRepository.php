<?php
/**
 * Created by PhpStorm.
 * User: jonasvanloey
 * Date: 2020-05-17
 * Time: 13:45
 */

namespace App\Repositories\Admin;


use Torann\LaravelRepository\Repositories\AbstractRepository;

class InstalinkRepository extends AbstractRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    protected $model = \App\Instalink::class;
}