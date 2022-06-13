<?php

namespace App\Controllers\Modules;

class AYC
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
