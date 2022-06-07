<?php

namespace App\Controllers\Modules;

class LogoFooter
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
