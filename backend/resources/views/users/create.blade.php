@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>Nieuwe medewerker</h1></div>
@stop

@section('content')
    {!! Form::open(['url' =>route('medewerkers.store'), 'method' => 'post']) !!}
    <div id="app" class="col-sm-3">
        @include('partials.singleImage',['path'=>'upload','image'=> 'none','name'=>'imageUrl'])
    </div>
    <div class="col-sm-9">
        {!! Form::open(['url' =>route('medewerkers.store'), 'method' => 'post']) !!}
        @include('users.partials.form')
    </div>
    <div class="row has-feedback {{ $errors->has('password') ? 'has-error' : '' }}">
        <div class="col-12 col-md-8 offset-md-2">
            <label for="password">Paswoord</label>
            <input type="password" name="password" class="form-control">
            @if ($errors->has('password'))
                <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
            @endif
        </div>
    </div>
    {!! Form::close() !!}
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop