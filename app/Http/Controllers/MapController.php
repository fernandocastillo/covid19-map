<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Country;
use App\Http\Resources\CountryResource;

class MapController extends Controller
{
    public function index(){

        $countries = CountryResource::collection( Country::with('states')->get());
        return Inertia::render('Auth/Map/Index',[
            'countries' => $countries
        ]);
    }
    
}
