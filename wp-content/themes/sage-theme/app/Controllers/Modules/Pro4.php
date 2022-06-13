<?php

namespace App\Controllers\Modules;

class Pro4
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
