<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'name','label'=>'name','value'=> isset($item->name)? $item->name : ''])
        @if ($errors->has('name'))
            <span class="help-block">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'function','label'=>'function','value'=> isset($item->function)? $item->function : ''])
        @if ($errors->has('function'))
            <span class="help-block">
                        <strong>{{ $errors->first('function') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.textbox',['name'=>'description','label'=>'description','value'=> isset($item->description)? $item->description : ''])
        @if ($errors->has('description'))
            <span class="help-block">
                        <strong>{{ $errors->first('description') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'email','label'=>'email','value'=> isset($item->email)? $item->email : ''])
        @if ($errors->has('email'))
            <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
        @endif
    </div>
</div>
<div class="row">
    <div class="col-12 col-md-8 offset-md-2">
        @include('partials.text',['name'=>'imageUrl','label'=>'imageUrl','value'=> isset($item->imageUrl)? $item->imageUrl : ''])
        @if ($errors->has('imageUrl'))
            <span class="help-block">
                        <strong>{{ $errors->first('imageUrl') }}</strong>
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