<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class RealtorListingController extends Controller
{
    public function index()
    {

        return inertia(
            'Realtor/Index',
            [
                'listings' => Auth::user()->listings,
            ]
        );
    }

    public function destroy(Listing $listing)
    {
        Gate::authorize('delete', $listing);

        $listing->deleteOrFail();

        return redirect()->back()->with('success', 'Listing was deleted!');
    }
}
