@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>Nieuw Portfolio Item</h1></div>
@stop

@section('content')
    <div class="col-sm-12">
        {!! Form::open(['url' =>route('portfolio.store'), 'method' => 'post']) !!}
        @include('portfolio.partials.form')
        {!! Form::close() !!}
    </div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop