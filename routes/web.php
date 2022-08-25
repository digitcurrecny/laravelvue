<?php

use Illuminate\Support\Facades\Route;

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





Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



// Route::get('/companies', [App\Http\Controllers\CompaniesController::class, 'index'])->name('companies.index');


Route::get('/{any?}', [App\Http\Controllers\IndexsController::class, 'index'])->where('any', '^(?!api\/)[\/\w\.-]*');


