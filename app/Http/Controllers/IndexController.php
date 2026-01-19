<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function index()
    {
        return inertia(
            'Index',
            ['message' => 'hello lravel']
        );
    }

    public function show()
    {
        return inertia('Show');
    }
}
