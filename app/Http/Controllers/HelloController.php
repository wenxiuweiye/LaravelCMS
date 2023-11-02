<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class HelloController extends Controller
{
    //
    public function index(): View{
        return view("hello",[ 'framework'=>'laravel','util'=>'blade' ]);
    }
}
