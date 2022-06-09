<?php

namespace App\Controllers\Modules;

class Pro2
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
