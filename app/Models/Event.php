<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\Narrative;
use App\Models\Plot;

class Event extends Eloquent
{
  protected $fillable = ['narrative_id', 'name', 'content', 'lat', 'lng'];
  protected $casts = [
    'is_start' => 'boolean'
  ];

  public function narrative()
  {
      return $this->belongsTo(Narrative::class);
  }

  public function scopeCloseTo($query, $narrativeId, $lat, $lng, $range = null)
  {
    $maxRange = config('geolocation.max_range');
    $range = isset($range) && $range <= $maxRange ? $range : $maxRange;

    return $query
      ->where('narrative_id', $narrativeId)
      ->whereRaw("ST_Distance_Sphere(point(lng, lat), point(?, ?)) < $range", [ $lng, $lat ]);
  }
}
