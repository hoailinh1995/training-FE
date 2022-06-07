<?php

namespace App\Controllers\Modules;

class ContentCenter1
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
