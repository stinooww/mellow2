<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instalink extends Model
{
    protected $fillable = ['title', 'link', 'mainImgUrl'];
}
