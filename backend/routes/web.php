<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'auth'], function () {


Route::get('/', 'Admin\adminController@index')->name('admin');

/*portfolio*/
Route::resource('portfolio','Admin\portfolioController');
Route::resource('medewerkers','Admin\userController');

Route::post('medewerkers/{id}/upload','Admin\userController@image');
Route::post('portfolio/{id}/upload/main','Admin\portfolioController@mainimage');
Route::post('portfolio/{id}/upload/thumb','Admin\portfolioController@thumbimage');
Route::post('portfolio/{id}/upload/car','Admin\portfolioController@carimage');
Route::post('portfolio/{id}/upload/smartphone','Admin\portfolioController@smartimage');


});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

