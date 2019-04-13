<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioRelationshipResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type'          => 'Tags',
            'attributes'    => [
                'Tags' => $this->tags,
            ],
        ];
    }
   /* public function with($request)
    {
        return [
            'links' => [
                'self' => route('portfolio.index'),
            ],
        ];
    }*/
}
