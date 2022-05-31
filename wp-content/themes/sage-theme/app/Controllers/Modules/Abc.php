<?php

namespace App\Controllers\Modules;

class Abc
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
