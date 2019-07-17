<?php


use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resource('portfolio', 'Api\PortfolioController');
Route::resource('taggables', 'Api\TaggableController');
route::get('sendmail','Mail\MailController@sendmail');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
