<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\Narrative;
use App\Models\Plot;

class Event extends Eloquent
{
  protected $fillable = ['narrative_id', 'name', 'content', 'lat', 'lng'];

  public function narrative()
  {
      return $this->belongsTo(Narrative::class);
  }
}
