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
        $this->beneathWater();
        $this->airTime();
        $this->ordinaryExtraordinary();
        $this->msl();
    }

    private function beneathWater()
    {
        $narrative = new Narrative();
        $narrative->name = 'Beneath Water';
        $narrative->author = 'Kevin Grist';
        $narrative->author_href = 'https://www.sparkedecho.org';
        $narrative->author_bio = File::get(database_path('seeds/beneath_water/author_bio.md'));
        $narrative->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Beneath Water';
        $event->content = File::get(database_path('seeds/beneath_water/index.md'));
        $event->lat = 50.855585;
        $event->lng = 0.576512;
        $event->is_start = true;
        $event->icon_url = '/img/beneath_water/map_icon.png';
        $event->save();
    }

    private function airTime()
    {
        $narrative = new Narrative();
        $narrative->name = 'air time';
        $narrative->author = 'Judith Ricketts';
        $narrative->author_href = 'https://www.linkedin.com/in/lovespictures/';
        $narrative->author_bio = File::get(database_path('seeds/air_time/author_bio.md'));
        $narrative->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'air time';
        $event->content = File::get(database_path('seeds/air_time/index.md'));
        $event->lat = 50.854639;
        $event->lng = 0.576489;
        $event->is_start = true;
        $event->icon_url = '/img/air_time/map_icon.png';
        $event->save();
    }

    private function ordinaryExtraordinary()
    {
        $narrative = new Narrative();
        $narrative->name = 'Ordinary Extraordinary';
        $narrative->author = 'Rosanna Lowe';
        $narrative->author_href = 'http://rosannalowe.com';
        $narrative->author_bio = File::get(database_path('seeds/ordinary_extraordinary/author_bio.md'));
        $narrative->save();

        $start_event = new Event();
        $start_event->narrative_id = $narrative->id;
        $start_event->name = 'Ordinary Extraordinary';
        $start_event->content = File::get(database_path('seeds/ordinary_extraordinary/index.md'));
        $start_event->lat = 50.855323;
        $start_event->lng = 0.577022;
        $start_event->is_start = true;
        $start_event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $start_event->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Alice Through the Looking Glass';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/1.alice_through_the_looking_glass.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Batwoman of Hastings';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/2.batwoman_of_hastings.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Lightning Lady';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/3.the_lightning_lady.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Technicolour Dreamboy';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/4.technicolour_dreamboy.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Disappearing Headmaster';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/5.the_disappearing_headmaster.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Honey Hunger Striker';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/6.the_honey_hunger_striker.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Microwaved Woman';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/7.the_microwaved_woman.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Bee Landlady';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/8.the_bee_landlady.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Hunger Brothers';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/9.the_hunger_brothers.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);
    }

    private function msl()
    {
        $narrative = new Narrative();
        $narrative->name = 'Smart Heritage';
        $narrative->author = 'MSL Projects';
        $narrative->author_href = 'http://www.mslprojects.co.uk';
        $narrative->author_bio = File::get(database_path('seeds/msl/author_bio.md'));
        $narrative->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'MSL Projects';
        $event->content = File::get(database_path('seeds/msl/index.md'));
        $event->lat = 50.855537;
        $event->lng = 0.575949;
        $event->is_start = true;
        $event->icon_url = '/img/map_icon.png';
        $event->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'America Ground';
        $event->content = File::get(database_path('seeds/msl/america_ground.md'));
        $event->lat = 50.855100;
        $event->lng = 0.576780;
        $event->is_start = false;
        $event->icon_url = '/img/map_icon.png';
        $event->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Gotham Alley';
        $event->content = File::get(database_path('seeds/msl/gotham_alley.md'));
        $event->lat = 50.855354;
        $event->lng = 0.576097;
        $event->is_start = false;
        $event->icon_url = '/img/map_icon.png';
        $event->save();
    }

    private function makePlot($start_event, $next_event)
    {
        $plot = new Plot();
        $plot->previous_event_id = $start_event->id;
        $plot->next_event_id = $next_event->id;
        $plot->save();
    }
}
