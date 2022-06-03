<?php

namespace App\Controllers\Modules;

class Anhem
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
