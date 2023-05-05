<?php

namespace App\Http\Controllers;

use App\Models\dates;
use Illuminate\Http\Request;

class DatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $date_api = dates::all();
        return $date_api;
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
        $opitech = new dates();
        $opitech->name = $request -> name;
        $opitech->subject = $request -> subject;
        $opitech->satisfaction = $request -> satisfaction;
        $opitech->priority = $request -> priority;
        $opitech->status = $request -> status;
        $opitech->save();
        return $opitech;
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\dates  $dates
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return dates::findOrFail($id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\dates  $dates
     * @return \Illuminate\Http\Response
     */
    public function edit(dates $dates)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\dates  $dates
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, dates $dates)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\dates  $dates
     * @return \Illuminate\Http\Response
     */
    public function destroy(dates $dates)
    {
        //
    }
}
