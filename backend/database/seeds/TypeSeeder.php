<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Model::unguard();
        DB::table('types')->truncate();

        $admin = new \App\Type();
        $admin->type = 'Website';
        $admin->save();
        $admin1 = new \App\Type();
        $admin1->type = 'Webshop';
        $admin1->save();
        $admin2 = new \App\Type();
        $admin2->type = 'SEO';
        $admin2->save();
        $admin3 = new \App\Type();
        $admin3->type = 'SEA';
        $admin3->save();
        $admin4 = new \App\Type();
        $admin4->type = 'logo';
        $admin4->save();
        $admin5 = new \App\Type();
        $admin5->type = 'grafisch ontwerp';
        $admin5->save();
        $admin6 = new \App\Type();
        $admin6->type = 'mails';
        $admin6->save();
    }
}
