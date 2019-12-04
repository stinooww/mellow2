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

    public function __construct($firstname, $name, $email, $tel, $region, $company, $deadline, $budget, $extrainfo)
    {
        $this->firstname = $firstname;
        $this->name = $name;
        $this->email = $email;
        $this->tel = $tel;
        $this->region = $region;
        $this->company = $company;
        $this->deadline = $deadline;
        $this->budget = $budget;
        $this->extrainfo = $extrainfo;
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
        $data['extrainfo']=$this->extrainfo;


        return $this->view('quoteemail',$data);
    }
}
