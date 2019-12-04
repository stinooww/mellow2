<?php

namespace App\Http\Controllers\Mail;

use App\Http\Requests\contactRequest;
use App\Http\Requests\quotefield;
use App\Mail\contact;
use App\Mail\quotation;
use App\Mail\seo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class MailController extends Controller
{
    public function sendcontactmail(Request $data){
        try {
            $this->validate($data, [
                'user.name' => 'required|string',
                'user.email' => 'required|email',
                'user.vraag' => 'string',
            ]);

        } catch (ValidationException $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error',
                'errors' => $exception->errors(),
            ], 422);
        } catch (ValidationException $e) {
        }

        Mail::to('contact@mellowwebdesign.be')->send(new contact($data->user['name'], $data->user['email'], $data->user['vraag']));

        return response()->json([
            'status' => 'success',
            'message' => 'Sucecss',
        ], 201);


    }

    public function sendquotationmail(Request $data){
        try {

            $this->validate($data, [
                'Offerte.firstname' => 'required|string',
                'Offerte.name' => 'required|string',
                'Offerte.email' => 'required|email',
                'Offerte.tel' => 'string|nullable',
                'Offerte.company' => 'string|nullable',
                'Offerte.region' => 'string|nullable',
                'Offerte.deadline' => 'string|nullable',
                'Offerte.budget' => 'string|nullable',
                'Offerte.extrainfo' => 'string|nullable',
            ]);

        } catch (ValidationException $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error',
                'errors' => $exception->errors(),
            ], 422);
        } catch (ValidationException $e) {
        }

        Mail::to('contact@mellowwebdesign.be')->send(
            new quotation(
                $data->Offerte['firstname'],
                $data->Offerte['name'],
                $data->Offerte['email'],
                $data->Offerte['tel'],
                $data->Offerte['region'],
                $data->Offerte['company'],
                $data->Offerte['deadline'],
                $data->Offerte['budget'],
                $data->Offerte['extrainfo']
            ));

        return response()->json([
            'status' => 'success',
            'message' => 'Success',
        ], 201);
    }

    public function sendseomail(Request $data){
        try {

            $this->validate($data, [
                'data.naam' => 'required|string',
                'data.bedrijfsnaam' => 'required|nullable',
                'data.email' => 'required|email',
                'data.website' => 'string|required',

            ]);

        } catch (ValidationException $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error',
                'errors' => $exception->errors(),
            ], 422);
        } catch (ValidationException $e) {
        }

        Mail::to('contact@mellowwebdesign.be')->send(
            new seo(
                $data->data['naam'],
                $data->data['bedrijfsnaam'],
                $data->data['email'],
                $data->data['website']
            ));

        return response()->json([
            'status' => 'success',
            'message' => 'Success',
        ], 201);
    }

}
