<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

    Route::controller(NoteController::class) -> group(function (){
        Route::get('/note', 'index');

        Route::post('/note/{userid}', 'addNoteByUserId');
        Route::get('/note/{userid}','queryNoteByUserId');
        Route::delete('/note/{id}','deleteNoteByNoteId');
        
        Route::get('/note/{user}/whole','queryAllNoteWholeByUserId');
    });
?>