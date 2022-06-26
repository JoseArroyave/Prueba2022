<?php

use App\Http\Controllers\API\gce_caracteristicasController;

Route::get('/getAll', [gce_caracteristicasController::class, 'getAll']);
Route::get('/getOne/{id}', [gce_caracteristicasController::class, 'getOne']);
Route::post('/create', [gce_caracteristicasController::class, 'create']);
Route::put('/update/{id}', [gce_caracteristicasController::class, 'update']);
Route::delete('/delete/{id}', [gce_caracteristicasController::class, 'delete']);
