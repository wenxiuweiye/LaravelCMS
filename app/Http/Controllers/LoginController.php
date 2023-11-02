<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    function login(Request $request)
    {
        $credentials = json_decode($request->getContent());

        echo($request->getContent());
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return response(["登录成功"]);
        }

        return response(["登录失败"],400);
    }
}
