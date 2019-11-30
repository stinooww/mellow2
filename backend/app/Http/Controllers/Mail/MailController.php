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

        Mail::to('contact@mellowwebdesign.be')->send(new contact($data));
    }
    public function sendquotationmail(Request $data){
        /* $validatedData = $data->validate([
             'firstname' => 'required|string',
             'name' => 'required|string',
             'email' => 'required|email',
             'tel' => 'string|nullable',
             'company' => 'string|nullable',
             'region' => 'string|nullable',
             'deadline' => 'string|nullable',
             'budget' => 'string|nullable',
             'extrainfo' => 'string|nullable',
         ]);

         Mail::to('jonas@mellowwebdesign.be')->send(new quotation($validatedData));*/
        Mail::to('contact@mellowwebdesign.be')->send(new quotation($data));
    }
    public function sendseomail(Request $data){
        Mail::to('contact@mellowwebdesign.be')->send(new seo($data));
    }
}
