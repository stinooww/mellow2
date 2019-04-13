<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PortfoliosResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => PortfolioResource::collection($this->collection),
        ];
    }
    public function with($request)
    {
        return [
            'links'    => [
                'self' => route('portfolio.index'),
            ],
        ];
    }

}
