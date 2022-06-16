<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\gce_caracteristicas;
use App\Http\Controllers\Controller;

class gce_caracteristicasController extends Controller
{
    public function getAll()
    {
        return gce_caracteristicas::all();
    }

    public function getOne($id)
    {
        return gce_caracteristicas::find($id);
    }

    public function create(Request $request)
    {
        $registro = new gce_caracteristicas();
        $registro->gce_id = $request->gce_id;
        $registro->gce_nombre_equipo = $request->gce_nombre_equipo;
        $registro->gce_board = $request->gce_board;
        $registro->gce_case = $request->gce_case;
        $registro->gce_procesador = $request->gce_procesador;
        $registro->gce_grafica = $request->gce_grafica;
        $registro->gce_ram = $request->gce_ram;
        $registro->gce_disco_duro = $request->gce_disco_duro;
        $registro->gce_teclado = $request->gce_teclado;
        $registro->gce_mouse = $request->gce_mouse;
        $registro->gce_pantalla = $request->gce_pantalla;
        $registro->gce_estado = $request->gce_estado;

        $registro->save();
        return $registro;
    }

    public function update(Request $request)
    {
        $registro = gce_caracteristicas::findOrFail($request->id);
        $registro->gce_id = $request->gce_id;
        $registro->gce_nombre_equipo = $request->gce_nombre_equipo;
        $registro->gce_board = $request->gce_board;
        $registro->gce_case = $request->gce_case;
        $registro->gce_procesador = $request->gce_procesador;
        $registro->gce_grafica = $request->gce_grafica;
        $registro->gce_ram = $request->gce_ram;
        $registro->gce_disco_duro = $request->gce_disco_duro;
        $registro->gce_teclado = $request->gce_teclado;
        $registro->gce_mouse = $request->gce_mouse;
        $registro->gce_pantalla = $request->gce_pantalla;
        $registro->gce_estado = $request->gce_estado;

        $registro->save();
        return $registro;
    }

    public function delete($id)
    {
        gce_caracteristicas::destroy($id);
        return 'El registro #' . $id . ' ha sido eliminado correctamente';
    }
}
