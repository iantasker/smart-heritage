<?php

use Illuminate\Database\Seeder;

use App\Models\Event;
use App\Models\Narrative;
use App\Models\Plot;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->batman();
        $this->mysteries();
    }

    private function batman()
    {
        $narrative = new Narrative();
        $narrative->name = "Bruce's Lament";
        $narrative->author = 'Jon Nicholson';
        $narrative->author_href = 'https://www.drjonnicholson.com';
        $narrative->summary = "If you've heard it once you've heard it a thousand times";
        $narrative->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Gotham Alley';
        $event->content = "An event's <em>content</em>";
        $event->lat = 50.855434;
        $event->lng = 0.576339;
        $event->is_start = true;
        $event->save();
    }

    private function mysteries()
    {
        $narrative = new Narrative();
        $narrative->name = "Mysteries";
        $narrative->author = 'Jon Nicholson';
        $narrative->author_href = 'https://www.drjonnicholson.com';
        $narrative->summary = "A trail of good food";
        $narrative->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = "Mr He's Take Away";
        $event->content = "An event's <em>content</em>";
        $event->lat = 50.855424;
        $event->lng = 0.580234;
        $event->is_start = true;
        $event->save();
    }
}
