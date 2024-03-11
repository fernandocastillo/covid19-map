<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $guarded=['created_at','updated_at'];

    public function states(){
        return $this->hasMany(State::class);
    }

    public function calculate(){
        $active=0;$recovered=0;$deceased=0;$total=0;
        foreach($this->states as $state){
            $active += $state->active;
            $recovered += $state->recovered;
            $deceased += $state->deceased;
            $total = $active + $recovered + $deceased;
        }

        $this->update([
            'active'=>$active,
            'recovered'=>$recovered,
            'deceased'=>$deceased,
            'total'=>$total,
        ]);
    }
}
