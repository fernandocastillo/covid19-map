<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class UserResource extends JsonResource
{    

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data =  parent::toArray($request);
        $data['created_at'] = $this->created_at->format('Y-m-d H:i:s');
        $data['last_login'] = $this->last_login ? $this->last_login->format('Y-m-d H:i:s') : null;

        return $data;
    }
}
