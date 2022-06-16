<?php

use App\Http\Controllers\API\gce_caracteristicasController;

Route::get('/', [gce_caracteristicasController::class, 'getAll']);
Route::get('/{id}/', [gce_caracteristicasController::class, 'getOne']);
Route::post('/', [gce_caracteristicasController::class, 'create']);
Route::put('/{id}/', [gce_caracteristicasController::class, 'update']);
Route::delete('/{id}/', [gce_caracteristicasController::class, 'delete']);
