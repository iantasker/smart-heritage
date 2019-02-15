<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('narrative_id');
            $table->string('name');
            $table->text('content');
            $table->float('lat', 10, 6);
            $table->float('lng', 10, 6);
            $table->timestamps();

            $table->foreign('narrative_id')->references('id')->on('narratives')->onDelete('cascade');
        });

        Schema::table('narratives', function (Blueprint $table) {
            $table->foreign('beginning_event_id')->references('id')->on('events')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('narratives', function (Blueprint $table) {
            $table->dropForeign(['beginning_event_id']);
        });

        Schema::dropIfExists('events');
    }
}
