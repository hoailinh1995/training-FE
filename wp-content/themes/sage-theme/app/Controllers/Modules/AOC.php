<?php

namespace App\Controllers\Modules;

class AOC
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
