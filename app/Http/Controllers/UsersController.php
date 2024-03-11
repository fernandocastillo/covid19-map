<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Validation\Rule;


class UsersController extends Controller
{
    public function index(){

        $users =UserResource::collection( User::all());
        $users->wrap(null);
        return Inertia::render('Auth/Users/Index',['users'=>$users]);
    }

    public function new(){
        return Inertia::render('Auth/Users/Form',['user'=>false]);
    }

    public function create(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',            
            'password' => 'required|confirmed|min:5'
        ]);

        User::create($request->only('name','email', 'password', 'is_active', 'is_super_admin'));

        $request->session()->put('success','User created successfully.');

        return redirect('/users');

    }

    public function edit($id){
        $user = User::findOrFail($id);
        return Inertia::render('Auth/Users/Form',[
            'user' => $user
        ]);
    }

    public function update($id, Request $request){
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'email' =>  ['required',Rule::unique('users')->ignore($user->id)],
            'password' => 'nullable|confirmed|min:5'
        ]);

        $data = $request->only('name','email', 'is_active', 'is_super_admin');        
        if($request->has('password')  && $request->password) $data['password'] = $request->get('password');
        $user->update($data);
        $request->session()->put('success','User updated successfully');

        return redirect('/users');
    }

    public function delete($id, Request $request){
        User::findOrFail($id)->delete();
        $request->session()->put('success','User deleted successfully');
        return redirect('/users');
    }
}
