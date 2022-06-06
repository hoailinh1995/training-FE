<?php

namespace App\Controllers\Modules;

class APC
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
