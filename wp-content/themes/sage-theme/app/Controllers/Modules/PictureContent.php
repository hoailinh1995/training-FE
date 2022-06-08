<?php

namespace App\Controllers\Modules;

class PictureContent
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
