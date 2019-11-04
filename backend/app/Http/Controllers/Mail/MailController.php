<?php

namespace App\Http\Controllers\Mail;

use App\Mail\contact;
use App\Mail\quotation;
use App\Mail\seo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendcontactmail(Request $data){
        Mail::to('jonas@mellowwebdesign.be')->send(new contact($data));
    }
    public function sendquotationmail(Request $data){
        Mail::to('jonas@mellowwebdesign.be')->send(new quotation($data));
    }
    public function sendseomail(Request $data){
        Mail::to('jonas@mellowwebdesign.be')->send(new seo($data));
    }
}
