<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::group(['namespace' => 'App\Http\Controllers\Api\V1', 'prefix' => 'v1',], function ($router) {

//     Route::get('/users/{id?}', 'UsersController@index')->name('user.list');

//     Route::get('register', 'RegisterController@index')->name('user.register');
//     Route::post('register', 'RegisterController@register')->name('user.register');
//     Route::get('login', 'loginController@index')->name('user.login');
//     Route::post('login', 'loginController@login')->name('user.login');



// });



Route::group(['namespace' => 'App\Http\Controllers\Api\V1', 'prefix' => 'v1'], function ($router) {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');



    Route::group(['middleware' => 'auth:api'], function(){
        Route::resource('companies', 'CompaniesController');
        Route::post('logout', 'AuthController@logout');
    });

 });







