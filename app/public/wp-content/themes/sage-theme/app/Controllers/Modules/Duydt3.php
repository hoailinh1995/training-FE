<?php

namespace App\Controllers\Modules;

class Duydt3
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
