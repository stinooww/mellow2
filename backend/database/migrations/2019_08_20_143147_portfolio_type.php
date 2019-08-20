<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PortfolioType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portfolio_type', function (Blueprint $table) {
            $table->bigInteger('portfolio_id')->unsigned();
            $table->bigInteger('type_id')->unsigned();
            $table->foreign('portfolio_id')->references('id')->on('portfolios')  ->onDelete('cascade');
            $table->foreign('type_id')->references('id')->on('types')  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('portfolio_type');
    }
}
