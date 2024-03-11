<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{    
    public function logout(Request $request){

        auth()->logout();
        $request->session()->invalidate(); 
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
