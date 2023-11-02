<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';
    protected $primary = 'id';
    protected $fillable = ['username', 'password', 'realname', 'sex','email','profile','power'];
    protected $hidden = ['password'];
}
