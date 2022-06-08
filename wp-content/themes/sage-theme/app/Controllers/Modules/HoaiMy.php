<?php

namespace App\Controllers\Modules;

class HoaiMy
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
