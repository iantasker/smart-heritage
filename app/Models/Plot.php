<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\Narrative;
use App\Models\Event;

class Plot extends Eloquent
{
  protected $fillable = ['previous_event_id', 'next_event_id'];

  public function previousEvent()
  {
    return $this->belongsTo(Event::class, 'previous_event_id');
  }

  public function NextEvent()
  {
    return $this->belongsTo(Event::class, 'next_event_id');
  }
}
