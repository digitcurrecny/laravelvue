<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class AuthController extends Controller
{





    public function register(Request  $request)
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


        $token = $user->createToken('My App Tocken')->accessToken;



        return response()->json([

            'data' => [
                'name' => $request->name,
                'email' => $request->email,
                'token' => $token,
            ]

        ], 201);
    }



    public function Login(Request $request)
    {

        $credentials = $request->only('email', 'password');




        if (Auth::attempt($credentials)) {


            $user = Auth::user();

            $token = $user->createToken('My App Tocken')->accessToken;

            return response([
                'status' => 'success',
                'status_code' => 200,
                'message' => 'Login has been successfully',
                'data' => [
                    'user' => $user,
                    'access_token' => $token
                ]
            ], 200);
        } else {


            return response([
                'status' => 'error',
                'status_code' => 401,
                'message' => 'Username or password is not correct',
                'data' => []
            ], 201);
        }
    }




    public function me(Request $request)
    {
        $user = $request->user();

        return response()->json(['user' => $user], 200);
    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response =   'You have been successfully logged out!' ;

        return response([
            'status' => 'success',
            'status_code' => 200,
            'message' => $response,
            'data' => []
        ], 200);
    }
}
