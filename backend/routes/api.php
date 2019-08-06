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
route::post('sendmail/contact','Mail\MailController@sendcontactmail');
route::post('sendmail/quotation','Mail\MailController@sendquotationmail');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
