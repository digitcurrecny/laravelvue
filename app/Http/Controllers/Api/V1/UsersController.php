<?php

namespace App\Http\Controllers\Api\V1;

use Core\Exceptions\UserException;
use Core\Http\Controllers\Controller;
use Core\Http\Resources\UsersResource;
use Core\Http\Resources\UserResource;

use Core\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index(User $id)
    // {


    //     if ($id->exists) {
    //         $users = $id;
    //     } else {
    //         $users = User::paginate(2);
    //     }
    // }




    public function index(User $id)
    {




throw new UserException();

        if ($id->exists) {
            $users = $id;
            return new UserResource($users);
        } else {
            $users = User::paginate(1);
            return new UsersResource($users);
        }


    }







    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
