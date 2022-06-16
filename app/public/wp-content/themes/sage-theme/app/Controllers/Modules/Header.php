<?php

namespace App\Controllers\Modules;

class Header
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
