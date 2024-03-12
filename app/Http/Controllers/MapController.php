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
            'countries' => $countries,
            'countriesAdded' => CountryResource::collection(auth()->user()->countries)
        ]);
    }

    public function sync(Request $request){
        $request->user()->countries()->sync($request->countries);
        return response()->json([]);
    }
    
}
