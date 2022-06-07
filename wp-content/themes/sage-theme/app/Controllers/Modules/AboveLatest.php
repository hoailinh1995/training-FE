<?php

namespace App\Controllers\Modules;

class AboveLatest
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
