<?php

namespace App\Controllers\Modules;

class Duydt4
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
