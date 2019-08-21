<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use App\Models\Narrative;
use App\Models\Plot;

use App\Http\Resources\NarrativeResource;
use App\Http\Resources\EventResource;

class NarrativeController extends Controller
{
  public function index(Request $request) {
    $lat = $request->input('lat');
    $lng = $request->input('lng');

    $narratives = Narrative::with('events')->closeTo($lat, $lng)->get();

    return NarrativeResource::collection($narratives);
  }

  public function events(Request $request, $narrativeId) {
    $events = Event::where('narrative_id', $narrativeId)->get();

    return EventResource::collection($events);
  }
}
