<?php

namespace App\Controllers\Modules;

class Pro
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
