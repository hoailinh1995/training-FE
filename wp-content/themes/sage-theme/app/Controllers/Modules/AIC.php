<?php

namespace App\Controllers\Modules;

class AIC
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
