<?php
/**
 * Created by PhpStorm.
 * User: jonasvanloey
 * Date: 2020-05-17
 * Time: 13:47
 */

namespace App\Http\Resources;


use App\Instalink;
use Illuminate\Http\Resources\Json\JsonResource;

class InstalinkResoursce extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $previous = Instalink::where('id', '<', $this->id)->max('id');
        $next = Instalink::where('id', '>', $this->id)->min('id');
        return [
            'type' => 'instalink',
            'id' => (string)$this->id,
            'attributes' => [
                'title' => $this->title,
                'link' => $this->link,
                'mainImgUrl' => asset('/storage/photos') . '/' . $this->mainImgUrl,

            ],
            'links' => [
                'self' => 'https://www.api.mellowwebdesign.be/api/blogs/' . $this->id,
                'next' => $next,
                'previous' => $previous
            ],
        ];
    }
}