<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use App\Models\Narrative;
use App\Models\Plot;

class NarrativeController extends Controller
{
  public function index(Request $request) {
    $lat = $request->input('lat');
    $lng = $request->input('lng');

    $narratives = Narrative::with('events')->closeTo($lat, $lng)->get();

    return $narratives->toJson();
  }

  public function show(Request $request, $narrativeId) {
    $narrative = Narrative::with('events')->findOrFail($narrativeId);

    return $narrative->toJson();
  }

  public function events(Request $request, $narrativeId) {
    $events = Event::where('narrative_id', $narrativeId)->get();

    return $events->toJson();
  }

  public function event(Request $request, $narrativeId, $eventId) {
    $event = Event::where('narrative_id', $narrativeId)->findOrFail($eventId);

    return $event->toJson();
  }
}
