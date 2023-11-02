<?php

use App\Http\Controllers\HelloController;
use Illuminate\Http\Request;
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
    return Inertia::render('Index');
});

Route::get('/home', function (Request $request) {

    $type = $request->query("type");

    $hot = [];

    return Inertia::render('Application', [
        'tabCurrent' => '0',
        'type' => empty($type) ? 'note' : $type,
        'sideBar' => ['note', 'collect'],
        'theme' => 'dark'
    ]);
});

Route::get('/person', function (Request $request) {
    $type = $request->query("type");

    $hot = [];
    return Inertia::render('Application', [
        'tabCurrent' => '1',
        'type' => empty($type) ? 'config' : $type,
        'sideBar' => ['config'],
        'theme' => 'dark'
    ]);
});

Route::get('/info', function (Request $request) {
    $type = $request->query("type");

    $hot = [];
    return Inertia::render('Application', [
        'tabCurrent' => '2',
        'type' => empty($type) ? 'config' : $type,
        'sideBar' => ['config'],
        'theme' => 'dark'
    ]);
});

//myself
Route::get('/hello', [HelloController::class, "index"]);

Route::get('/react', function () {
    return Inertia::render("Home");
});
