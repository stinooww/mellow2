<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = ['clientName','title', 'request','solution','websiteUrl','mainImgUrl','Thumbnail','Carousel','category'];

    public function tags()
    {
        return $this->morphToMany('App\Tag', 'taggable');
    }
    public function types()
    {
        return $this->belongsToMany('App\Type');
    }
}
