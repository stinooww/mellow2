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


Route::get('/', 'admin\adminController@index')->name('admin');

/*portfolio*/
Route::resource('portfolio','admin\portfolioController');
Route::resource('medewerkers','admin\userController');

Route::post('medewerkers/{id}/upload','admin\userController@image');
Route::post('portfolio/{id}/upload/main','admin\portfolioController@mainimage');
Route::post('portfolio/{id}/upload/thumb','admin\portfolioController@thumbimage');
Route::post('portfolio/{id}/upload/car','admin\portfolioController@carimage');



});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

