<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\CRUDController;
use App\Repositories\Admin\UserRepository;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\ImageController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class userController extends CRUDController
{
    //
    public $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
        $this->viewFolder = 'users';
        $this->routName = 'medewerkers';
    }

    public function image(Request $request, $id){
      $response=$this->upload($request);
        DB::table('users')
            ->where('id', $id)
            ->update(['imageUrl' => "$response"]);

    }

    public function storeUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required', 'string', 'max:255',
            'email' => 'required', 'string', 'email', 'max:255', 'unique:users',
            'password' => 'required', 'string', 'min:8', 'confirmed',


        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        } else {
            $userdata = [
                'name' => $request->name,
                'email' => $request->email,
                'function' => $request->function,
                'description' => $request->description,
                'password' => Hash::make($request->password),
            ];
            User::create($userdata);
            view($this->viewFolder . '.index');
        }

    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return \App\User
     */
    protected function createUser(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }


}
