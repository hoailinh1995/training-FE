<?php

namespace App\Controllers\Modules;

class Duydt5
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
