<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * Get the user that owns the phone.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * The roles that belong to the user.
     */
    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}
