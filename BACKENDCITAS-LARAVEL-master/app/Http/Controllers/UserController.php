<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //
    public function index()
    {
        try {
            \Log::info('Showing user list');
            return response()->json(User::get(), 200);
        } catch (\Exception $exception) {
            return response()->json(['error' => $exception->getMessage()]);
        }
    }

    public function store(Request $request)
    {
        Log::info($request->all());
        $fields = $request->validate(([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]));

        try {
            DB::beginTransaction();
            $user = User::create([
                'name' => $fields['name'],
                'email' => $fields['email'],
                'password' => $fields['password'],
            ]);
            DB::commit();
            return response()->json($user);
        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json(['error' => $exception->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        $fields = $request->validate(([
            'name' => 'required',
            'email' => 'required|email',
        ]));

        try {
            DB::beginTransaction();
            $user = User::find($id);
            $user->update([
                'name' => $fields['name'],
                'email' => $fields['email'],
            ]);
            DB::commit();
            return response()->json($user);
        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json(['error' => $exception->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            $user = User::find($id);
            $user->delete();
            DB::commit();
            return response()->json($user);
        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json(['error' => $exception->getMessage()]);
        }
    }
}
