<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use Carbon\Carbon;

use App\Http\Resources\EventResource;

class NarrativeResource extends JsonResource
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
            'author' => $this->author,
            'author_href' => $this->author_href,
            'summary' => $this->summary,
            // 'events' => EventResource::collection($this->events),
            'lat' => $this->startEvent()->lat,
            'lng' => $this->startEvent()->lng,
            'created_at' => $this->created_at->toIso8601String(),
            'updated_at' => $this->updated_at->toIso8601String(),
        ];
    }
}
