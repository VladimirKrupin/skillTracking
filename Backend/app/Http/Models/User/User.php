<?php

namespace App\Http\Models\User;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','lang',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function generateToken()
    {
        $this->api_token = str_random(60);
        $this->save();

        return $this->api_token;
    }

    public function forgotPassword(){
        return $this->hasOne('App\Http\Models\User\ForgotPassword','email','email');
    }

    public function settings(){
        return $this->hasMany('App\Http\Models\User\UserSetting');
    }
    public function changePassword(){
        return $this->hasOne('App\Http\Models\User\ChangePassword');
    }
}
