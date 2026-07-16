<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/services', fn () => Inertia::render('Services'))->name('services');
Route::get('/portfolio', fn () => Inertia::render('Portfolio'))->name('portfolio');
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');
Route::post('/contact', ContactController::class)
    ->middleware('throttle:5,1')
    ->name('contact.store');

Route::fallback(fn () => Inertia::render('NotFound')->toResponse(request())->setStatusCode(404));
