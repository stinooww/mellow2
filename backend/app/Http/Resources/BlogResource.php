<?php
/**
 * Created by PhpStorm.
 * User: jonasvanloey
 * Date: 2020-05-17
 * Time: 12:35
 */

namespace App\Http\Resources;


use App\Blog;
use App\Repositories\Admin\BlogRepository;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $previous = Blog::where('id', '<', $this->id)->max('id');
        $next = Blog::where('id', '>', $this->id)->min('id');
        return [
            'type' => 'blogs',
            'id' => (string)$this->id,
            'attributes' => [
                'title' => $this->title,
                'blog' => $this->blog,
                'intro' => $this->intro,
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