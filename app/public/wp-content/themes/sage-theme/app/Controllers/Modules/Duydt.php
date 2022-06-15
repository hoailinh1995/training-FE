<?php

namespace App\Controllers\Modules;

class Duydt
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
