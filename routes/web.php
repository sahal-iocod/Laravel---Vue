<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\RealtorListingController;
use App\Http\Controllers\UserAccountController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('listings.index');
});

Route::resource('listings', ListingController::class)->only('create', 'store', 'edit', 'update')->middleware('auth');
Route::resource('listings', ListingController::class)->except('create', 'store', 'edit', 'update', 'destroy');

Route::resource('user-account', UserAccountController::class)->only(['create', 'store']);

Route::get('/login', [AuthController::class, 'create'])->name('login');
Route::post('/login', [AuthController::class, 'store'])->name('login.store');
Route::delete('/logout', [AuthController::class, 'destroy'])->name('logout');

Route::prefix('realtor')->name('realtor.')->middleware('auth')->group(function () {
    Route::resource('listing', RealtorListingController::class)->only(['index', 'destroy']);
});
