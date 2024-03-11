<?php

namespace App\Observers;

use App\Models\State;

class StateObserver
{
    /**
     * Handle the State "created" event.
     */
    public function saving(State $state): void
    {
        $state->total = $state->active +  $state->recovered + $state->deceased;

    }


    public function saved(State $state): void
    {
        $state->country->calculate();
    }

    public function deleted(State $state): void
    {
        $state->country->calculate();
    }
    
}
