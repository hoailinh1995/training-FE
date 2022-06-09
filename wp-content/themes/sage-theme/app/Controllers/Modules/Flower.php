<?php

namespace App\Controllers\Modules;

class Flower
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
