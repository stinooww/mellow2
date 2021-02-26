<?php
/**
 * Created by PhpStorm.
 * User: jonasvanloey
 * Date: 2020-05-17
 * Time: 12:34
 */

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\ResourceCollection;

class BlogsResource extends ResourceCollection
{

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => BlogResource::collection($this->collection),
        ];
    }

    public function with($request)
    {
        return [
            'links' => [
                'self' => route('blogs.index'),
            ],
        ];
    }
}