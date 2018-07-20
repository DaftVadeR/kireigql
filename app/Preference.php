<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Preference extends Model
{
    /**
     * The roles that belong to the user.
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'users_preferences');
    }
}
