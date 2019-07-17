<?php

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
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
        DB::table('users')->truncate();

        $admin = new User();
        $admin->name = 'Superadmin';
        $admin->email = 'admin@mellowwebdesign.be';
        $admin->function = 'superadmin';
        $admin->password = Hash::make('Pussydestroyer69');

        $admin->save();



    }
}

