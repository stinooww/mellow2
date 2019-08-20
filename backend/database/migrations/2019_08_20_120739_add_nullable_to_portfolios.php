<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNullableToPortfolios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('portfolios', function (Blueprint $table) {
            $table->string('mainImgUrl')->nullable()->change();
            $table->string('Thumbnail')->nullable()->change();
            $table->string('Carousel')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('portfolios', function (Blueprint $table) {
            //
        });
    }
}
