<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class seo extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $name,$bedrijf, $email,$url;

    public function __construct($name, $bedrijf, $email, $url)
    {
        $this->name = $name;
        $this->bedrijf = $bedrijf;
        $this->email = $email;
        $this->url = $url;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data['name']=$this->name;
        $data['bedrijf']=$this->bedrijf;
        $data['email']=$this->email;
        $data['url']=$this->url;




        return $this->view('seomail',$data);
    }
}
