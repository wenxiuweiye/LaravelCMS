<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
        # code...
        
        return response(User::all())
                ->header("Content-Type","application/json;  charset=utf-8");
    }

    public function addUser(Request $request)
    {
        try {
            $data = $request->all();
            $username = User::all("username")->where("username",null,$data['username']);
            // 如果存在
            if ( count($username) !== 0 ) 
            {
                return response(["用户已存在"]);
            }
            $user = new User();
            
            $user ->username = $data['username'];
            $user ->password = Hash::make($data['password']);
            $user ->realname = $data ['realname'];
            $user ->sex = $data['sex'];
            $user ->email = $data['email'];
            $user ->profile = $data['profile'];
            $user ->power = $data['power'];
            
            $user->save();
    
            return response(["success"]);
        } catch (\Throwable $th) {
            return response([$th->getMessage()]);
        }
    }
    
    public function queryById(string $id)
    {
        $data = User::find((int)$id);
        
        return response($data);
    }

    public function updateById(Request $request, string $id)
    {
        $user = User::find($id);

        $data = $user->update($request->all());

        if ($data) {
            # code...
            return response(['success']);
        }

        return response(['fail']);
    }

    public function deleteById(string $id)
    {
        $data = User::destroy((int) $id);

        if ($data) {
            # code...
            return response(['success']);
        }

        return response(['fail']);
    }
}

