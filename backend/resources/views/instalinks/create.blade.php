@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>Nieuwe Link</h1></div>
@stop

@section('content')
    <div class="col-sm-12">
        {!! Form::open(['url' =>route('instalinks.store'), 'method' => 'post']) !!}
        @include('partials.singleImage',['path'=>'upload','image'=> 'none','name'=>'mainImgUrl'])
        @include('instalinks.partials.form')
        {!! Form::close() !!}
    </div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop