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
      $table->integer('narrative_id')->unsigned();
      $table->string('name');
      $table->text('content');
      $table->float('lat', 10, 6)->nullable();
      $table->float('lng', 10, 6)->nullable();
      $table->boolean('is_start')->default(false);
      $table->string('icon_url')->default('/img/msl_projects_circle.png');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('events');
  }
}
