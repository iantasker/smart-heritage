<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use Carbon\Carbon;

use App\Http\Resources\NextEventResource;

class EventResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'content' => str_replace('/img/', asset('/img/').'/', $this->content),
            'coords' => [
                'lat' => $this->lat,
                'lng' => $this->lng
            ],
            'is_start' => $this->is_start,
            'icon_url' => asset($this->icon_url),
            'next_events' => NextEventResource::collection($this->nextEvents),
            'created_at' => $this->created_at->toIso8601String(),
            'updated_at' => $this->updated_at->toIso8601String(),
        ];
    }
}
