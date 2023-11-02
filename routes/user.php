<?php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

    Route::controller(UserController::class) -> group(function (){

        Route::get('user', 'index');

        Route::post('user', 'addUser');
       
        Route::get('user/{id}', 'queryById');

        Route::put('user/{id}','updateById');

        Route::delete('user/{id}','deleteById');

    })->middleware('result');   
?>

