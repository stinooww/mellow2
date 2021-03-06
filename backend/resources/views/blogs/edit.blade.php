@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>{{$item->title}}</h1></div>
@stop

@section('content')
    <div id="app" class="row">
        <div class="col-sm-12">
            <h2>Foto's</h2>
        </div>
        <div class="col-sm-4">
            @include('partials.singleImage',['path'=>'upload/main','image'=> asset('/storage/photos/'.$item->mainImgUrl),'name'=>'mainImgUrl'])
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h2>gegevens</h2>
        </div>
        <div class="col-sm-12">

            {!! Form::open(['url' =>route('blogs.update',$item->id), 'method' => 'POST']) !!}
            <input type="hidden" name="_method" value="PUT">
            @include('blogs.partials.form')
            {!! Form::close() !!}

        </div>

    </div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop