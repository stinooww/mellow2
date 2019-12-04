<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class contact extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $name, $email,$vraag;

    public function __construct(string $naam, string $mail, string $quest)
    {

        $this->name = $naam;
        $this->email = $mail;
        $this->vraag = $quest;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data['name']=$this->name;
        $data['email']=$this->email;
        $data['vraag']=$this->vraag;


        return $this->view('email',$data);
    }
}
