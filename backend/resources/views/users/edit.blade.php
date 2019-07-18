@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12">
        <h1>{{$item->name}}</h1>
        <hr>
    </div>
    <hr>
@stop

@section('content')

    <div id="app" class="col-sm-3">
        @include('partials.singleImage',['path'=>'upload','image'=> asset('/images/'.$item->imageUrl),'name'=>'imageUrl'])
    </div>
    <div class="col-sm-9">
        {!! Form::open(['url' =>route('medewerkers.update',$item->id), 'method' => 'POST']) !!}
        <input type="hidden" name="_method" value="PUT">
        @include('users.partials.form')
        <a href="{{ url(config('adminlte.password_reset_url', 'password/reset')) }}"
           class="text-center"
        >reset wachtwoord</a>
    </div>
    {!! Form::close() !!}

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop