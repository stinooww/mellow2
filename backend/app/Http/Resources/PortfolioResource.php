<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioResource extends JsonResource
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
            'type'          => 'portfolios',
            'id'            => (string)$this->id,
            'attributes'    => [
                'clientName' => $this->clientName,
                'title' => $this->title,
                'request' => $this->request,
                'solution' => $this->solution,
                'websiteUrl' => $this->websiteUrl,
                'quote' => $this->quote,
                'mainImgUrl' => asset('/storage/photos'). '/' .$this->mainImgUrl,
                'Thumbnail' => asset('/storage/photos'). '/' .$this->Thumbnail,
                'Carousel' => asset('/storage/photos'). '/' .$this->Carousel,
                'Smartphone' => asset('/storage/photos'). '/' .$this->Smartphone,
            ],
            'relationships' => new PortfolioRelationshipResource($this),
            'links'         => [
                'self' => route('portfolio.show', ['id' => $this->id]),
            ],
        ];
    }
}
