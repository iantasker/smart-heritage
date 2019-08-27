<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\Event;
use App\Models\Plot;

class Narrative extends Eloquent
{
  protected $fillable = ['name', 'author', 'image', 'summary', 'event_id'];
  protected $casts = [];

  public function events()
  {
    return $this->hasMany(Event::class);
  }

  public function startEvents()
  {
    return $this->events()->where('is_start', true);
  }

  public function scopeCloseTo($query, $lat, $lng, $range = null)
  {
    $maxRange = config('geolocation.max_range');
    $range = isset($range) && $range <= $maxRange ? $range : $maxRange;

    return $query->whereHas('events', function($q) use ($range, $lat, $lng) {
      $q->where('is_start', true)->whereRaw("ST_Distance_Sphere(point(lng, lat), point(?, ?)) < $range", [ $lng, $lat ]);
    });
  }
}
