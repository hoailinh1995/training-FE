<?php

namespace App\Controllers\Modules;

class Module11
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
