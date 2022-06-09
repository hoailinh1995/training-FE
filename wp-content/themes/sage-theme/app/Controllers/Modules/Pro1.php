<?php

namespace App\Controllers\Modules;

class Pro1
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
