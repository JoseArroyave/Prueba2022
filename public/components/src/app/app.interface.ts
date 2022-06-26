export interface Computer {
    gce_id?: number;
    gce_nombre_equipo: string;
    gce_board: string;
    gce_case: string;
    gce_procesador: string;
    gce_grafica: string;
    gce_ram: string;
    gce_disco_duro: string;
    gce_teclado: string;
    gce_mouse: string;
    gce_pantalla: string;
    gce_estado: number | string;
    created_at: Date | null;
    updated_at: Date | null;
}

export interface ComputerUpdate {
    gce_id_actualizado?: number;
    gce_nombre_equipo_actualizado?: string;
    gce_board_actualizado?: string;
    gce_case_actualizado?: string;
    gce_procesador_actualizado?: string;
    gce_grafica_actualizado?: string;
    gce_ram_actualizado?: string;
    gce_disco_duro_actualizado?: string;
    gce_teclado_actualizado?: string;
    gce_mouse_actualizado?: string;
    gce_pantalla_actualizado?: string;
    gce_estado_actualizado?: number | string;
    created_at?: Date | null;
    updated_at?: Date | null;
}