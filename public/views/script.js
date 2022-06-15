import { ApiRequest } from "../../assets/js/request.js";

/** Clase que representa al componente computador */
class Computador {

  constructor() { }

  /** Actualiza el listado de computadores en la tabla */
  static get() {
    ApiRequest.get('Caracteristicas', 'getAll').then(response => {
      /** Referencia del cuerpo de la tabla */
      const tbody = document.querySelector('#list-table tbody');
      tbody.innerHTML = ''; // Limpia la tabla

      response.data.forEach(item => {
        tbody.innerHTML += `<tr ${Number(item.gce_estado) === 0 ? "class='alert-secondColor'" : " "}>
          <td>${item.gce_nombre_equipo}</td>
          <td>${item.gce_board}</td>
          <td>${item.gce_case}</td>
          <td>${item.gce_procesador}</td>
          <td>${item.gce_grafica}</td>
          <td>${item.gce_ram}</td>
          <td>${item.gce_disco_duro}</td>
          <td>${item.gce_teclado}</td>
          <td>${item.gce_mouse}</td>
          <td>${item.gce_pantalla}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" ${Number(item.gce_estado) === 1 ? 'checked' : ''}
                onchange="Computador.updateStatus(${item.gce_id}, event.target.checked)">
            </div>
          </td>
          <td>
            <button type='button' class='btn-editar ${Number(item.gce_estado) === 0 ? 'editarInactive' : ''}' onclick='Computador.llenarEdicion(${JSON.stringify(
          item)})' data-bs-target='#modalEdicion' data-bs-toggle='modal'>
              <i class="fa-solid fa-pencil iconEditar"></i>
            </button>
          <button type='button' class='btn-eliminar ${Number(item.gce_estado) === 0 ? 'editarInactive' : ''}' onclick='Computador.eliminarRegistro(${item.gce_id})'>
            <i class="fa-solid fa-trash iconEliminar"></i>
            </button>
          </td>
        </tr>`; // Añade la fila a la tabla
      });
    }).catch(error => console.log('Ha ocurrido un error', error));
  }

  /** Registra un computador en la base de datos */
  static add = (event) => {
    event.preventDefault(); // Cancela el restablecimiento de la página

    /** Formulario de registro */
    const registerForm = event.target;

    const parameters = {
      gce_nombre_equipo: registerForm.querySelector('[name="gce_nombre_equipo"]').value,
      gce_board: registerForm.querySelector('[name="gce_board"]').value,
      gce_case: registerForm.querySelector('[name="gce_case"]').value,
      gce_procesador: registerForm.querySelector('[name="gce_procesador"]').value,
      gce_grafica: registerForm.querySelector('[name="gce_grafica"]').value,
      gce_ram: registerForm.querySelector('[name="gce_ram"]').value,
      gce_disco_duro: registerForm.querySelector('[name="gce_disco_duro"]').value,
      gce_teclado: registerForm.querySelector('[name="gce_teclado"]').value,
      gce_mouse: registerForm.querySelector('[name="gce_mouse"]').value,
      gce_pantalla: registerForm.querySelector('[name="gce_pantalla"]').value,
      gce_estado: registerForm.querySelector('[name="gce_estado"]').value,
    };

    ApiRequest.post('Caracteristicas', 'addOne', parameters).then((response) => {
      console.log('Añadir', response);
      this.get();
    }).catch(error => console.log('Ha ocurrido un error', error));
  };

  /**
   * Actualiza el estado de un computador
   * @param {number} id Identificador del computador
   * @param {status} boolean Nuevo estado
   */
  static updateStatus = (id, status) => {

    ApiRequest.post("Caracteristicas", "updateStatus", { id: id, status: status })
      .then((response) => {
        console.log('Actualizar estado', response)
        this.get()
      })
      .catch((error) => console.log("Ha ocurrido un error", error));
  };

  static llenarEdicion(item) {
    document.getElementById('gce_id_actualizado').value = item.gce_id
    document.getElementById('gce_nombre_equipo_actualizado').value = item.gce_nombre_equipo
    document.getElementById('gce_board_actualizado').value = item.gce_board
    document.getElementById('gce_case_actualizado').value = item.gce_case
    document.getElementById('gce_procesador_actualizado').value = item.gce_procesador
    document.getElementById('gce_grafica_actualizado').value = item.gce_grafica
    document.getElementById('gce_ram_actualizado').value = item.gce_ram
    document.getElementById('gce_disco_duro_actualizado').value = item.gce_disco_duro
    document.getElementById('gce_teclado_actualizado').value = item.gce_teclado
    document.getElementById('gce_mouse_actualizado').value = item.gce_mouse
    document.getElementById('gce_pantalla_actualizado').value = item.gce_pantalla
    document.getElementById('gce_estado_actualizado').value = item.gce_estado
  };

  static actualizarComputador(event) {
    event.preventDefault()

    let datos = {
      gce_id: document.getElementById('gce_id_actualizado').value,
      gce_nombre_equipo: document.getElementById('gce_nombre_equipo_actualizado').value,
      gce_board: document.getElementById('gce_board_actualizado').value,
      gce_case: document.getElementById('gce_case_actualizado').value,
      gce_procesador: document.getElementById('gce_procesador_actualizado').value,
      gce_grafica: document.getElementById('gce_grafica_actualizado').value,
      gce_ram: document.getElementById('gce_ram_actualizado').value,
      gce_disco_duro: document.getElementById('gce_disco_duro_actualizado').value,
      gce_teclado: document.getElementById('gce_teclado_actualizado').value,
      gce_mouse: document.getElementById('gce_mouse_actualizado').value,
      gce_pantalla: document.getElementById('gce_pantalla_actualizado').value,
      gce_estado: document.getElementById('gce_estado_actualizado').value,
    }

    ApiRequest.post('Caracteristicas', 'actualizarComputador', datos).then((response) => {
      console.log('Actualizar', response)
      this.get()
      Swal.fire({
        icon: 'success',
        text: 'El computador ' + datos.gce_nombre_equipo + ' ha sido actualizado',
      })
    }).catch((error) => {
      console.log('Ha ocurrido un error', error)
    })

  }

  static eliminarRegistro(id) {
    ApiRequest.post('Caracteristicas', 'eliminarRegistro', { id: id }).then((response) => {
      console.log('Eliminado', response)
      this.get()
      Swal.fire({
        icon: 'success',
        text: 'El registro ha sido eliminado',
      })
    }).catch((error) => {
      console.log('Ha ocurrido un error', error)
    })
  }

}

// Evento que espera a que cargue el contenido HTML 
document.addEventListener('DOMContentLoaded', () => {
  Computador.get(); // Actualiza la tabla de computadores
});


(function () { // Habilita el uso de las clases en el archivo HTML
  this.Computador = Computador;
  this.ApiRequest = ApiRequest;
}).apply(window);
