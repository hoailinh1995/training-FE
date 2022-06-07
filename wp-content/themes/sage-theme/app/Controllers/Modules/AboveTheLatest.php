<?php

namespace App\Controllers\Modules;

class AboveTheLatest
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
