@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>Medewerkers</h1><a href="{{url('admin/medewerkers/create')}}" class="btn btn-success">Voeg een medewerker toe</a></div>
@stop

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-10">overzicht van de medewerkers</div>

        </div>
        <div class="row">
            @if(count($items))
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">role</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    @foreach($items as $item)
                        <tr>
                            <td><a href="{{route('medewerkers.edit',$item->id)}}">{{$item->name}}</a></td>
                            <td>{{$item->function }}</td>
                            <td>
                                {{Form::open(['method'  => 'DELETE', 'route' => ['portfolio.destroy', $item->id]])}}
                                {{Form::button('<i class="fa fa-trash-o"></i>', array('type' => 'submit', 'class' => 'btn-danger'))}}
                                {{ Form::close() }}
                            </td>
                        </tr>
                    @endforeach
                </table>
            @else
                <div class="col-sm-12">
                    <p>er zijn nog geen medewerkers.</p>
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