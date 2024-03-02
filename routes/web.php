<?php
use App\Http\Controllers\StudController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/studs', [StudController::class, 'index'])->name('studs.index');
Route::get('/studs/add', [StudController::class, 'create'])->name('studs.create');
Route::post('/studs/store', [StudController::class, 'store'])->name('studs.store');
Route::get('/studs/edit/{id}', [StudController::class, 'edit'])->name('studs.edit');
Route::post('/studs/update/{id}', [StudController::class, 'update'])->name('studs.update');
Route::get('/studs/delete/{id}', [StudController::class, 'delete'])->name('studs.delete');
Route::get('/studs/edit/{id}', [StudController::class, 'edit'])->name('studs.edit');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
