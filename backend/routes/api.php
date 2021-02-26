<?php


use Illuminate\Http\Request;



header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
//header('Access-Control-Allow-Headers:  ');
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin,Access-control-allow-origin, AuthorizationAccess-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
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
Route::resource('blogs', 'Api\BlogController');
Route::resource('instalinks', 'Api\InstalinkController');
Route::resource('taggables', 'Api\TaggableController');
route::post('sendmail/contact','Mail\MailController@sendcontactmail');
route::post('sendmail/quotation','Mail\MailController@sendquotationmail');
route::post('sendmail/seo','Mail\MailController@sendseomail');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
