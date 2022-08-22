<?php

namespace Core\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

// class UsersResource extends JsonResource
class UsersResource extends ResourceCollection

{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);


        return [
            'data' => $this->collection->map(function($user){

                return[

                    'name' => $user->name,
                    'email' => $user->email,
                ];

            }) ,

        ];
    }

    public function with($request)
    {
        return [

            'status' => 'OK',
        ];
    }
}
