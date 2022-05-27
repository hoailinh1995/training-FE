<?php

namespace App\Controllers\Modules;

class Abcd
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
