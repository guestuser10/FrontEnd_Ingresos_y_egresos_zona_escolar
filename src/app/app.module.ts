import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';




import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component'; // Asegúrate de tener HttpClientModule importado
import { FormsModule } from '@angular/forms';  // Importa FormsModule

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ModificarUsuariorolComponent } from './modificar-usuariorol/modificar-usuariorol.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ModificarCategoriaComponent } from './modificar-categoria/modificar-categoria.component';
import { ModificarEscuelaComponent } from './modificar-escuela/modificar-escuela.component';
import { EscuelasComponent } from './escuelas/escuelas.component';
import { EliminarEscuelasComponent } from './eliminar-escuelas/eliminar-escuelas.component';
import { CrearEscuelaComponent } from './crear-escuela/crear-escuela.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { CrearCategoriaingComponent } from './crear-categoriaing/crear-categoriaing.component';
import { EliminarCategoriaingComponent } from './eliminar-categoriaing/eliminar-categoriaing.component';
import { EliminarCategoriaegrComponent } from './eliminar-categoriaegr/eliminar-categoriaegr.component';
import { IyeComponent } from './iye/iye.component';
import { CrearIngresoComponent } from './crear-ingreso/crear-ingreso.component';
import { CrearEgresoComponent } from './crear-egreso/crear-egreso.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ModificarEscuelaAlumnadoComponent } from './modificar-escuela-alumnado/modificar-escuela-alumnado.component';
import { ModificarEscuelaLocalizacionComponent } from './modificar-escuela-localizacion/modificar-escuela-localizacion.component';
import { CrearEgresoarchivoComponent } from './crear-egresoarchivo/crear-egresoarchivo.component';
import { IngresolosComponent } from './ingresolos/ingresolos.component';
import { DocumentoComponent } from './documento/documento.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { InicioSupervisorComponent } from './inicio-supervisor/inicio-supervisor.component';
import { EscuelasSupervisorComponent } from './escuelas-supervisor/escuelas-supervisor.component';
import { CrearUsuariosSupervisorComponent } from './crear-usuarios-supervisor/crear-usuarios-supervisor.component';
import { DatosSupervisorComponent } from './datos-supervisor/datos-supervisor.component';
import { ModificarDatosSupervisorComponent } from './modificar-datos-supervisor/modificar-datos-supervisor.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    CrearUsuariosComponent,
    ModificarUsuarioComponent,
    EliminarUsuarioComponent,
    ModificarUsuariorolComponent,
    CategoriasComponent,
    ModificarCategoriaComponent,
    ModificarEscuelaComponent,
    EscuelasComponent,
    EliminarEscuelasComponent,
    CrearEscuelaComponent,
    CrearCategoriaComponent,
    CrearCategoriaingComponent,
    EliminarCategoriaingComponent,
    EliminarCategoriaegrComponent,
    IyeComponent,
    CrearIngresoComponent,
    CrearEgresoComponent,
    ModificarEscuelaAlumnadoComponent,
    ModificarEscuelaLocalizacionComponent,
    CrearEgresoarchivoComponent,
    IngresolosComponent,
    DocumentoComponent,
    PruebasComponent,
    InicioSupervisorComponent,
    EscuelasSupervisorComponent,
    CrearUsuariosSupervisorComponent,
    DatosSupervisorComponent,
    ModificarDatosSupervisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,
    MatIconModule,
    NgApexchartsModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
