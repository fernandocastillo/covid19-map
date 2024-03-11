<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'loginView'])->name('loginView');
    Route::post('/login', [AuthController::class, 'login'])->name('login');    
});

Route::middleware('auth')->group(function () {
    Route::get('/', [MapController::class, 'index'])->name('map');
    Route::post('/logout', [DashboardController::class, 'logout'])->name('logout');


    Route::prefix('users')->group(function () {
        Route::get('/', [UsersController::class, 'index'])->name('users.index');
        Route::get('/new', [UsersController::class, 'new'])->name('users.new');
        Route::post('/', [UsersController::class, 'create'])->name('users.create');

        Route::prefix('/{id}')->group(function(){
            Route::get('/', [UsersController::class, 'edit'])->name('users.edit');
            Route::put('/', [UsersController::class, 'update'])->name('users.update');
            Route::delete('/', [UsersController::class, 'delete'])->name('users.delete');
        });
    });
});