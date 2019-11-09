

<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'clientName','label'=>'clientName','value'=> isset($item->clientName)? $item->clientName : ''])
        @if ($errors->has('clientName'))
            <span class="help-block">
                        <strong>{{ $errors->first('clientName') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'title','label'=>'title','value'=> isset($item->title)? $item->title : ''])
        @if ($errors->has('title'))
            <span class="help-block">
                        <strong>{{ $errors->first('title') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.richText',['name'=>'request','label'=>'request','value'=> isset($item->request)? $item->request : ''])
        @if ($errors->has('request'))
            <span class="help-block">
                        <strong>{{ $errors->first('request') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.richText',['name'=>'solution','label'=>'solution','value'=> isset($item->solution)? $item->solution : ''])
        @if ($errors->has('solution'))
            <span class="help-block">
                        <strong>{{ $errors->first('solution') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'websiteUrl','label'=>'websiteUrl','value'=> isset($item->websiteUrl)? $item->websiteUrl : ''])
        @if ($errors->has('websiteUrl'))
            <span class="help-block">
                        <strong>{{ $errors->first('websiteUrl') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'quote','label'=>'quote','value'=> isset($item->quote)? $item->quote : ''])
        @if ($errors->has('quote'))
            <span class="help-block">
                        <strong>{{ $errors->first('quote') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'Contact','label'=>'Contact','value'=> isset($item->Contact)? $item->Contact : ''])
        @if ($errors->has('Contact'))
            <span class="help-block">
                        <strong>{{ $errors->first('Contact') }}</strong>
                    </span>
        @endif
    </div>
</div>

@foreach($types as $type)
    {{Form::checkbox('categoryArray[]', $type->id,isset($item) ? $item->types->contains('id', $type->id) ? 'checked' : '':'' )}}<label>{{$type->type}}</label>
@endforeach
<br>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        {!! Form::submit('Save', array('class' => 'btn big')) !!}
    </div>
</div>