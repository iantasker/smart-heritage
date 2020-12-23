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
        $this->dotDashSalons();
        $this->thisIsForEveryone();
        $this->ourPastOurFuture();
        $this->derelictChorale();
        $this->rockOnRockFair();
        $this->remixRemade();
    }

    private function derelictChorale()
    {
        $narrative = new Narrative();
        $narrative->name = 'A Derelict Chorale';
        $narrative->author = 'MSL';
        $narrative->author_href = ': http://www.mslprojects.co.uk/chris-thorpe-tracey/';
        $narrative->author_bio = File::get(database_path('seeds/derelict_chorale/author_bio.md'));
        $narrative->save();

        $start_event = new Event();
        $start_event->narrative_id = $narrative->id;
        $start_event->name = 'A Derelict Chorale';
        $start_event->content = File::get(database_path('seeds/derelict_chorale/index.md'));
        $start_event->lat = 50.855344;
        $start_event->lng = 0.576893;
        $start_event->is_start = true;
        $start_event->icon_url = '/img/pins/3.png';
        $start_event->save();
    }

    private function dotDashSalons()
    {
        $narrative = new Narrative();
        $narrative->name = 'Dot Dash Salons';
        $narrative->author = 'MSL';
        $narrative->author_href = 'http://www.mslprojects.co.uk/salons/';
        $narrative->author_bio = File::get(database_path('seeds/dot_dash_salons/author_bio.md'));
        $narrative->save();

        $start_event = new Event();
        $start_event->narrative_id = $narrative->id;
        $start_event->name = 'Dot Dash Salons';
        $start_event->content = File::get(database_path('seeds/dot_dash_salons/index.md'));
        $start_event->lat = 50.854705;
        $start_event->lng = 0.576459;
        $start_event->is_start = true;
        $start_event->icon_url = '/img/pins/4.png';
        $start_event->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Dot Dash Salon #1 - Ordinary Extraordinary revisited';
        $event->content = File::get(database_path('seeds/dot_dash_salons/one.md'));
        $event->lat = 50.855229;
        $event->lng = 0.576880;
        $event->is_start = false;
        $event->icon_url = '/img/pins/1.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Dot Dash Salon #2 - Rock Fair and the Carnivalesque';
        $event->content = File::get(database_path('seeds/dot_dash_salons/two.md'));
        $event->lat = 50.855093;
        $event->lng = 0.576271;
        $event->is_start = false;
        $event->icon_url = '/img/pins/2.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Dot Dash Salon #3 - Song and Dance at the Fairs';
        $event->content = File::get(database_path('seeds/dot_dash_salons/three.md'));
        $event->lat = 50.854853;
        $event->lng = 0.576250;
        $event->is_start = false;
        $event->icon_url = '/img/pins/3.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Dot Dash Salon #4 - Imagine this…';
        $event->content = File::get(database_path('seeds/dot_dash_salons/four.md'));
        $event->lat = 50.854738;
        $event->lng = 0.576599;
        $event->is_start = false;
        $event->icon_url = '/img/pins/5.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Dot Dash Salon #5 - A Derelict Chorale';
        $event->content = File::get(database_path('seeds/dot_dash_salons/five.md'));
        $event->lat = 50.854990;
        $event->lng = 0.576754;
        $event->is_start = false;
        $event->icon_url = '/img/pins/6.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Dot Dash Salon #6 – Sonic Lockdown with Kevin Grist';
        $event->content = File::get(database_path('seeds/dot_dash_salons/six.md'));
        $event->lat = 50.855362;
        $event->lng = 0.576228;
        $event->is_start = false;
        $event->icon_url = '/img/pins/7.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Dot Dash Salon #7 - The Great Storm of 1834';
        $event->content = File::get(database_path('seeds/dot_dash_salons/seven.md'));
        $event->lat = 50.855027;
        $event->lng = 0.577446;
        $event->is_start = false;
        $event->icon_url = '/img/pins/8.png';
        $event->save();

        $this->makePlot($start_event, $event);
    }

     private function rockOnRockFair()
    {
        $narrative = new Narrative();
        $narrative->name = 'Rock On, Rock Fair';
        $narrative->author = 'MSL';
        $narrative->author_href = 'http://www.mslprojects.co.uk/rock-on-rock-fair/';
        $narrative->author_bio = File::get(database_path('seeds/rock_on_rock_fair/author_bio.md'));
        $narrative->save();

        $start_event = new Event();
        $start_event->narrative_id = $narrative->id;
        $start_event->name = 'Rock On, Rock Fair';
        $start_event->content = File::get(database_path('seeds/rock_on_rock_fair/index.md'));
        $start_event->lat = 50.855383;
        $start_event->lng = 0.576287;
        $start_event->is_start = true;
        $start_event->icon_url = '/img/pins/5.png';
        $start_event->save();
    }

    private function thisIsForEveryone()
    {
        $narrative = new Narrative();
        $narrative->name = 'This Is For Everyone';
        $narrative->author = 'MSL';
        $narrative->author_href = 'http://www.mslprojects.co.uk/this-is-for-everyone/ ';
        $narrative->author_bio = File::get(database_path('seeds/this_is_for_everyone/author_bio.md'));
        $narrative->save();

        $start_event = new Event();
        $start_event->narrative_id = $narrative->id;
        $start_event->name = 'This Is For Everyone ';
        $start_event->content = File::get(database_path('seeds/this_is_for_everyone/index.md'));
        $start_event->lat = 50.854975;
        $start_event->lng = 0.576689;
        $start_event->is_start = true;
        $start_event->icon_url = '/img/pins/1.png';
        $start_event->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Beneath Water';
        $event->content = File::get(database_path('seeds/beneath_water/index.md'));
        $event->lat = 50.855585;
        $event->lng = 0.576512;
        $event->is_start = false;
        $event->icon_url = '/img/pins/2.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'air time';
        $event->content = File::get(database_path('seeds/air_time/index.md'));
        $event->lat = 50.854974;
        $event->lng = 0.577190;
        $event->is_start = false;
        $event->icon_url = '/img/pins/2.png';
        $event->save();

        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Ordinary Extraordinary';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/index.md'));
        $event->lat = 50.855275;
        $event->lng = 0.576804;
        $event->is_start = false;
        $event->icon_url = '/img/pins/3.png';
        $event->save();

        $this->makePlot($start_event, $event);
        $start_event = $event;

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Lightning Lady';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/the_lightning_lady.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Honey Hunger Striker';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/the_honey_hunger_striker.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Technicolour Dreamboy';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/technicolour_dreamboy.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Batwoman of Hastings';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/batwoman_of_hastings.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Disappearing Headmaster';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/the_disappearing_headmaster.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Bee Landlady';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/the_bee_landlady.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Microwaved Woman';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/the_microwaved_woman.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Alice Through the Looking Glass';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/alice_through_the_looking_glass.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Hunger Brothers';
        $event->content = File::get(database_path('seeds/ordinary_extraordinary/the_hunger_brothers.md'));
        $event->is_start = false;
        $event->icon_url = '/img/ordinary_extraordinary/map_icon.png';
        $event->save();
        $this->makePlot($start_event, $event);
    }

    private function ourPastOurFuture()
    {
        $narrative = new Narrative();
        $narrative->name = 'Our Past, Our Future';
        $narrative->author = 'MSL';
        $narrative->author_href = 'http://www.mslprojects.co.uk/our-past-our-future-developing-historical-sources-for-creative-inspiration/';
        $narrative->author_bio = File::get(database_path('seeds/our_past_our_future/author_bio.md'));
        $narrative->save();

        $start_event = new Event();
        $start_event->narrative_id = $narrative->id;
        $start_event->name = 'Our Past, Our Future';
        $start_event->content = File::get(database_path('seeds/our_past_our_future/index.md'));
        $start_event->lat = 50.855027;
        $start_event->lng = 0.577446;
        $start_event->is_start = true;
        $start_event->icon_url = '/img/pins/2.png';
        $start_event->save();
    }

    private function remixRemade()
    {
        $narrative = new Narrative();
        $narrative->name = 'Remix, Remade';
        $narrative->author = 'MSL';
        $narrative->author_href = 'http://www.mslprojects.co.uk/chris-thorpe-tracey/';
        $narrative->author_bio = File::get(database_path('seeds/remix_remade/author_bio.md'));
        $narrative->save();

        $start_event = new Event();
        $start_event->narrative_id = $narrative->id;
        $start_event->name = 'Remix, Remade';
        $start_event->content = File::get(database_path('seeds/remix_remade/index.md'));
        $start_event->lat = 50.854475;
        $start_event->lng = 0.577237;
        $start_event->is_start = true;
        $start_event->icon_url = '/img/pins/6.png';
        $start_event->save();
    }

    private function makePlot($start_event, $next_event)
    {
        $plot = new Plot();
        $plot->previous_event_id = $start_event->id;
        $plot->next_event_id = $next_event->id;
        $plot->save();
    }
}
