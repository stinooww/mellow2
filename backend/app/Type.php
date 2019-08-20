<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public function portfolios()
    {
        return $this->belongsToMany('App\Portfolio');
    }
}
