<?php

namespace App\Controllers\Modules;

class ATC
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
