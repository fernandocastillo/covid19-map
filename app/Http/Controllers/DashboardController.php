<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function home(){
        return Inertia::render('Auth/Home');
    }

    public function logout(Request $request){

        auth()->logout();
        $request->session()->invalidate(); 
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
