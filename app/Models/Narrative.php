<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\Event;
use App\Models\Plot;

class Narrative extends Eloquent
{
  protected $fillable = ['name', 'author', 'image', 'summary', 'event_id'];
  protected $maxRange = 150; // Meters

  public function events()
  {
    return $this->hasMany(Event::class);
  }

  public function closeTo($lat, $lng)
  {
    return DB::table('narratives')
      ->join('events', 'events.id', '=', 'narratives.event_id')
      ->whereRaw("ST_Distance_Sphere(point(events.lng, events.lat), point(?, ?)) < $maxRange", [ $lng, $lat ]);
  }
}
