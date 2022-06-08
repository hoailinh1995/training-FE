<?php

namespace App\Controllers\Modules;

class ContentCenter2
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
