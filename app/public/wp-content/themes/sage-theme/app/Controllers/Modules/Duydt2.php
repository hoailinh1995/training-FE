<?php

namespace App\Controllers\Modules;

class Duydt2
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
