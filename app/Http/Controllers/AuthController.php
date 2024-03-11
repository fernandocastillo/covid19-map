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
        $user = User::where('email', $validated['email'])->first();

        if ($user && $user->is_active && Auth::attempt(array('email' => $validated['email'], 'password' => $validated['password']), $request->get('remember', false))) {
            //return redirect()->route('index');
            Auth::user()->update(['last_login'=>date('Y-m-d H:i:s')]);
            return Inertia::location(url('/')); // <-- force to refresh the template due Blade @auth directive in app.blade.php

        } else {
            $validator->errors()->add(
                'password', 'Your password does not match with your email or your account has been deactivated.'
            );
            return redirect()->back()->withErrors($validator)->withInput();
        }
    }
}
