<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\UserController;
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


Route::resource('appointment', AppointmentController::class);

Route::get('users', [UserController::class, 'index']);

Route::put('appointment/{id}', [AppointmentController::class, 'update']);
Route::delete('appointment/{id}', [AppointmentController::class, 'destroy']);

Route::post('users', [UserController::class, 'store']);

Route::put('users/{id}', [UserController::class, 'update']);

Route::delete('users/{id}', [UserController::class, 'destroy']);
