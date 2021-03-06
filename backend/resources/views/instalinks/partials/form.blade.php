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
        @include('partials.text',['name'=>'link','label'=>'link','value'=> isset($item->link)? $item->link : ''])
        @if ($errors->has('link'))
            <span class="help-block">
                        <strong>{{ $errors->first('link') }}</strong>
                    </span>
        @endif
    </div>
</div>

<br>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        {!! Form::submit('Save', array('class' => 'btn big')) !!}
    </div>
</div>