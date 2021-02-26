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
        @include('partials.richText',['name'=>'intro','label'=>'intro','value'=> isset($item->intro)? $item->intro : ''])
        @if ($errors->has('intro'))
            <span class="help-block">
                        <strong>{{ $errors->first('intro') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.richText',['name'=>'blog','label'=>'blog','value'=> isset($item->blog)? $item->blog : ''])
        @if ($errors->has('blog'))
            <span class="help-block">
                        <strong>{{ $errors->first('blog') }}</strong>
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