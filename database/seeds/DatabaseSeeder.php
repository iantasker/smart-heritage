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
        $this->interviews();
        $this->msl();
        // $this->wrnv();
    }

    private function interviews()
    {
        $narrative = new Narrative();
        $narrative->name = 'Interviews';
        $narrative->author = 'Rosanna Lowe';
        $narrative->author_href = 'http://rosannalowe.com';
        $narrative->summary = '';
        $narrative->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'The Lightning Lady';
        $event->content = 'Lightning never strikes twice<br/>
Oh, it did.<br/>
First time I was eight<br/>
Flung sky high<br/>
Electrified<br/>
Died<br/>
For two minutes<br/>
Dad<br/>
Revived me<br/>
But the bolt<br/>
Made me feel more alive than ever

Once the lightning<br/>
Has stung you<br/>
Sung you<br/>
Blistered through you<br/>
It has claimed you<br/>
It will find you again

Second time<br/>
I was sixteen<br/>
Glimpsed the flash of a world<br/>
Of pure energy and light<br/>
Shocked again<br/>
To be lightning\'s dumbstruck bride

At first didn\'t know my own power<br/>
Shocked colleagues as I shook their hands<br/>
Gave lovers an electric kiss<br/>
Now I crackle at my human husband<br/>
I fizzle at my fleshbound children<br/>
To hug I hold a wooden spoon<br/>
At work I wear a "strap-on"<br/>
To tap upon the keyboard<br/>
In case I blow a fuse<br/>
Always needing to ground myself<br/>
So the heavenly power inside me<br/>
Is earthed

People say: "You\'re amazing"<br/>
"No" I say<br/>
"It<br/>
Just<br/>
Hurts."

**Example embedded content from SoundCloud, not final content!**

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/394114131&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"></iframe>

**Example embedded content from SoundCloud, not final content!**';
        $event->lat = 50.855323;
        $event->lng = 0.577022;
        $event->is_start = true;
        $event->map_icon_url = '/svg/fa/thunderstorm.svg';
        $event->save();
    }

    private function msl()
    {
        $narrative = new Narrative();
        $narrative->name = 'Rock Alley';
        $narrative->author = 'MSL Projects';
        $narrative->author_href = 'http://www.mslprojects.co.uk/storylines';
        $narrative->summary = '';
        $narrative->save();

        $event = new Event();
        $event->narrative_id = $narrative->id;
        $event->name = 'Rock Alley';
        $event->content = '**On 10th September 2017 [Storylines](http://www.mslprojects.co.uk/storylines) launched Rock Alley in Hastings as a new space for storytellers, artists and community.**

Rock Alley is a space where the built environment meets the natural one, where the invisible past and the present are embedded in the landscape, but which is largely unknown and poorly used. On the day we had a programme for artists, historians and storytellers who created and presented a series of events for a promenading audience – a show and tell of the history of the place; for a day, bringing it back to life.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/231704848?byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
        $event->lat = 50.855434;
        $event->lng = 0.576339;
        $event->is_start = true;
        $event->map_icon_url = '/img/msl_projects_circle.png';
        $event->save();
    }

//     private function wrnv()
//     {
//         $narrative = new Narrative();
//         $narrative->name = 'Hastings Rocks!';
//         $narrative->author = 'White Rock Neighbourhood Ventures';
//         $narrative->author_href = 'https://www.rockhouse.org.uk';
//         $narrative->summary = '';
//         $narrative->save();

//         $event = new Event();
//         $event->narrative_id = $narrative->id;
//         $event->name = 'Rock House';
//         $event->content = '[Rock House](https://www.rockhouse.org.uk/) is an ambitious mixed-use project that breathes new life into a previously underused building situated in the White Rock area of Hastings town centre. It’s nine floors are home to living space, work space and a community hub. Those who live and work here must meet certain criteria of **need**, **enthusiasm** and **contribution** to the building and the wider community.';
//         $event->lat = 50.855583;
//         $event->lng = 0.576131;
//         $event->is_start = true;
//         $event->map_icon_url = '/svg/fa/hand-rock.svg';
//         $event->save();

//         $event = new Event();
//         $event->narrative_id = $narrative->id;
//         $event->name = 'The Observer Building';
//         $event->content = '[The Observer Building](https://theobserverbuilding.org.uk/) has been in a state of dereliction and decay for 34 years.

// We’re using our phased development approach to put the building to immediate productive use and protect the building as a community asset. We want to revive it as long-term, genuinely affordable housing and workspaces and a vibrant leisure destination, providing opportunities for local people and working with partners throughout the project.';
//         $event->lat = 50.855566;
//         $event->lng = 0.575872;
//         $event->is_start = false;
//         $event->map_icon_url = '/svg/fa/newspaper.svg';
//         $event->save();

//         $event = new Event();
//         $event->narrative_id = $narrative->id;
//         $event->name = 'Gotham Alley';
//         $event->content = '[Gothem Alley](https://www.facebook.com/gothamalley/) is an outdoor gallery space bringing together community and events groups

// <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/231704848?byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
//         $event->lat = 50.855434;
//         $event->lng = 0.576339;
//         $event->is_start = false;
//         $event->map_icon_url = '/svg/fa/digging.svg';
//         $event->save();
//     }
}
