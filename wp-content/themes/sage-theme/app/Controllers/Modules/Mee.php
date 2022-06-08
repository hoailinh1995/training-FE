<?php

namespace App\Controllers\Modules;

class Mee
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
