<?php

namespace Core\Http\Controllers\Api\V2;

use Core\Http\Controllers\Controller;
use Core\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    public function Register(Request  $request)
    {


        $data = $request->validate([
            'name' => 'required|string|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:5',

        ]);



        $inputs = $request->all();



        $user = User::query()->create([

            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // $token = $user->createToken('My App Tocken')->plainTextToken;
        $token = $user->createToken('My App Tocken')->accessToken;



        return response()->json([

            'data' => [
                'name' => $request->name,
                'email' => $request->email,
                'token' => $token,
            ]

        ],201);
    }

    public function Login(Request $request)
    {

        $credentials = $request->only('email', 'password');



        if (Auth::attempt($credentials)) {


            $user = Auth::user();

            $token = $user->createToken('My App Tocken')->accessToken;
            return response()->json([

                'data' => [
                    'name' => $request->name,
                    'email' => $request->email,
                    'token' => $token,
                ]

            ], 201);
        } else {
            return response()->json([

                'data' => [
                    'status' => 'Eroror',
                    'code' => 401,

                ]

            ], 401);
        }
    }
}
