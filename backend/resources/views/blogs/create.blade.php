@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>Nieuw Blogbericht</h1></div>
@stop

@section('content')
    <div class="col-sm-12">
        {!! Form::open(['url' =>route('blogs.store'), 'method' => 'post']) !!}
        @include('partials.singleImage',['path'=>'upload','image'=> 'none','name'=>'mainImgUrl'])
        @include('blogs.partials.form')
        {!! Form::close() !!}
    </div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop