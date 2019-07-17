<?php

namespace App\Http\Controllers\Mail;

use App\Mail\contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendmail(){
        Mail::to('jonas@mellowwebdesign.be')->send(new contact());
    }
}
