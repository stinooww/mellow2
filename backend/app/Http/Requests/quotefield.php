<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class quotefield extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'required|string',
            'name' => 'required|string',
            'email' => 'required|email',
            'tel' => 'string|nullable',
            'company' => 'string|nullable',
            'region' => 'string|nullable',
            'deadline' => 'string|nullable',
            'budget' => 'string|nullable',
            'extrainfo' => 'string|nullable',
        ];
    }
}
