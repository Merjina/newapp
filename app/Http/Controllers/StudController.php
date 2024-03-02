<?php

namespace App\Http\Controllers;

use App\Models\Stud;
use Illuminate\Http\Request;

class StudController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $studs = Stud::all();
        return inertia('Studs/Index', ['studs' => $studs]);
    
    }

    public function create()
    {
        return inertia('Studs/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'Name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'mobile' => 'required|string|max:255',
        'Address' => 'required|string|max:255',
    ]);

    $studs = new Stud();
    $studs->name = $validatedData['Name'];
    $studs->email = $validatedData['email'];
    $studs->mobile = $validatedData['mobile'];
    $studs->address = $validatedData['Address'];
    $studs->save();


    return redirect()->route('studs.index');
}

    public function edit($id)
    {
        $stud = Stud::findOrFail($id);
        return inertia('Studs/Edit', ['stud' => $stud]);
    

    }
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'mobile' => 'required|string|max:255',
            'address' => 'required|string|max:255',
        ]);

        $stud = Stud::findOrFail($id);
        $stud->update($validatedData);

        return redirect()->route('studs.index');
    }

    public function destroy(Stud $stud)
    {
        $stud->delete();
        return redirect()->route('studs.index');
    }
}