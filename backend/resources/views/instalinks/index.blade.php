@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>Instagram links</h1><a href="{{url('admin/instalinks/create')}}" class="btn btn-success">Voeg
            een InstaLink toe</a></div>
@stop

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-10">overzicht van de links</div>

        </div>
        <div class="row">
            @if(count($items))
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">title</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    @foreach($items as $item)
                        <tr>
                            <td><a href="{{route('instalinks.edit',$item->id)}}">{{$item->title}}</a></td>
                            <td>
                                {{Form::open(['method'  => 'DELETE', 'route' => ['instalinks.destroy', $item->id]])}}
                                {{Form::button('<i class="fa fa-trash-o"></i>', array('type' => 'submit', 'class' => 'btn-danger'))}}
                                {{ Form::close() }}
                            </td>
                        </tr>
                    @endforeach
                </table>
            @else
                <div class="col-sm-12">
                    <p>er zijn nog geen links items aangemaakt.</p>
                </div>
            @endif
        </div>
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop