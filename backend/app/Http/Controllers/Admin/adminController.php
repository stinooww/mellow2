<?php

namespace App\Http\Controllers\Admin;

use App\Mail\contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class adminController extends Controller
{
    //
    public function index(){
        return view('admin.dashboard');
    }


}
