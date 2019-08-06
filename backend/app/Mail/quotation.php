<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class quotation extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $firstname,$name, $email,$tel,$region,$company,$deadline,$budget,$extrainfo;
    public function __construct($data)
    {
        $this->firstname=$data->firstname;
        $this->name=$data->name;
        $this->email=$data->email;
        $this->tel=$data->tel;
        $this->region=$data->region;
        $this->company=$data->company;
        $this->deadline=$data->deadline;
        $this->budget=$data->budget;
        $this->extrainfo=$data->extrainfo;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data['firstname']=$this->firstname;
        $data['name']=$this->name;
        $data['email']=$this->email;
        $data['tel']=$this->tel;
        $data['region']=$this->region;
        $data['company']=$this->company;
        $data['deadline']=$this->deadline;
        $data['budget']=$this->budget;
        $data['budget']=$this->budget;
        $data['extrainfo']=$this->extrainfo;


        return $this->view('quoteemail',$data);
    }
}
