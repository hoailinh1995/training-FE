<?php

namespace App\Controllers\Modules;

class ADC
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
