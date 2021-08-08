// RECOMIENDO ABRIR EL PROYECYO EN OPEN IN NEW WINDOW PARA MEJOR VISUALIZACIÓN
import { Component, VERSION } from '@angular/core';
import { IUser } from './Interfaces/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser = {
    name: 'Verónica',
    country: 'Colombia'
  };

  updateUser(user: IUser) {
    this.user = user;
  }
}

/* 3. Que pasa si, una vez actualices los datos del perfil de usuario, el cliente necesita que se actualice la información dentro de usuario-info.component? Que cambios necesitarias hacer?

Responde esta pregunta en forma de comentario dentro del archivo app.component.ts. e.g.

----RESPUESTA------------------------------------------------------------------------
// Solo tendria que cambiar el contenido de las variables messageUser1 y messageUser2, 
//ya que estos estan comunicados con el usuario-info y asi este presenta los cambios.

--------------------------------------------------------------------------------------

4.Si guardas la información del usuario (nombre, pais) en el componente padre (app.component.ts), de tal manera que es propagada hacia abajo a los componentes hijos que la necesitan, ¿cuales componentes de la jerarquía no requieren de dicha información? ¿de que forma óptima propones que se podria propagar esta información?

Responde esta pregunta en forma de comentario dentro del archivo app.component.ts 

----RESPUESTA---------------------------------------------------------------------------

Los componentes que no requieren la información pienso que serian el header y el perfil-usuario, porque estos solo contienen títulos que hacen referencia a los datos del usuario.

Una forma óptima para propagar la información del usuario podria ser por medio de un servicio
e inyectarlo dentro del componente padre, para que asi este lo propague a sus hijos.
*/
