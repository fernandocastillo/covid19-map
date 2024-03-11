<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function loginView()
    {        
        return Inertia::render('Guest/Login');
    }

    public function login(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            'email' => ['required', 'exists:users'],
            'password' => ['required'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $validated = $validator->validated();
        
        if (Auth::attempt(array('email' => $validated['email'], 'password' => $validated['password']), $request->get('remember', false))) {
            //return redirect()->route('index');            
            return Inertia::location(url('/')); // <-- force to refresh the template due Blade @auth directive in app.blade.php

        } else {
            $validator->errors()->add(
                'password', 'La contraseña no coincide con tu usuario o tu cuenta ha sido desactivada.'
            );
            return redirect()->back()->withErrors($validator)->withInput();
        }
    }
}
