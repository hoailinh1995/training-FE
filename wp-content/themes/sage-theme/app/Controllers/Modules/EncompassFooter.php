<?php

namespace App\Controllers\Modules;

class EncompassFooter
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
