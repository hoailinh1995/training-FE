<?php

namespace App\Controllers\Modules;

class PictureConnect
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
