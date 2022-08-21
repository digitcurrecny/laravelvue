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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



// Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
//     Route::resource('companies', 'CompaniesController', ['except' => ['create', 'edit']]);
//     });


    Route::group(['namespace' => 'App\Http\Controllers\Api\V1', 'prefix' => 'v1'], function ($router) {

        Route::resource('companies', 'CompaniesController');

    });



