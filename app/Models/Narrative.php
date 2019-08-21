<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\Event;
use App\Models\Plot;

class Narrative extends Eloquent
{
  protected $fillable = ['name', 'author', 'image', 'summary', 'event_id'];

  public function events()
  {
    return $this->hasMany(Event::class);
  }

  public function startEvent()
  {
    return $this->events()->where('is_start', true)->first();
  }

  public function scopeCloseTo($query, $lat, $lng)
  {
    $maxRange = config('geolocation.max_range');
    $range = isset($range) && $range <= $maxRange ? $range : $maxRange;

    return $query
      ->join('events', 'narratives.id', '=', 'events.narrative_id')
      ->where('events.is_start', true)
      ->whereRaw("ST_Distance_Sphere(point(events.lng, events.lat), point(?, ?)) < $range", [ $lng, $lat ]);
  }
}
