<?php

namespace App\Controllers\Modules;

class LogoContent
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
