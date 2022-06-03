<?php

namespace App\Controllers\Modules;

class Abcde
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
