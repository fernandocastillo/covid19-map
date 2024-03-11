<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Observers\StateObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;


#[ObservedBy([StateObserver::class])]
class State extends Model
{
    use HasFactory;

    protected $guarded=['created_at','updated_at'];

    public function country(){
        return $this->belongsTo(Country::class);
    }
}
