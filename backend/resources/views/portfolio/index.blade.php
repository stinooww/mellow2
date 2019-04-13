@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <div class="col-sm-12"><h1>Portfolio</h1><a href="{{url('admin/portfolio/create')}}" class="btn btn-success">Voeg een item toe</a></div>
@stop

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-10">overzicht van de portfolioitems</div>

        </div>
        <div class="row">
            @if(count($items))
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">title</th>
                            <th scope="col">client</th>
                        </tr>
                    </thead>
                @foreach($items as $item)
                    <tr>
                        <td><a href="{{route('portfolio.edit',$item->id)}}">{{$item->title}}</a></td>
                        <td>{{$item->clientName }}</td>
                    </tr>
                    @endforeach
                </table>
                @else
                <div class="col-sm-12">
                    <p>er zijn nog geen portfolio items aangemaakt.</p>
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