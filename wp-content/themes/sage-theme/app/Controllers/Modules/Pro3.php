<?php

namespace App\Controllers\Modules;

class Pro3
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
