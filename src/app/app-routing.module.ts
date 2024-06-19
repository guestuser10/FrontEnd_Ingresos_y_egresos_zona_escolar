import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { CrearCategoriaingComponent } from './crear-categoriaing/crear-categoriaing.component';
import { CrearEscuelaComponent } from './crear-escuela/crear-escuela.component';
import { EscuelasComponent } from './escuelas/escuelas.component';
import { IyeComponent } from './iye/iye.component';
import { CrearEgresoComponent } from './crear-egreso/crear-egreso.component';
import { CrearIngresoComponent } from './crear-ingreso/crear-ingreso.component';
import { CrearEgresoarchivoComponent } from './crear-egresoarchivo/crear-egresoarchivo.component';
import { IngresolosComponent } from './ingresolos/ingresolos.component';
import { DocumentoComponent } from './documento/documento.component';
import { InicioSupervisorComponent } from './inicio-supervisor/inicio-supervisor.component';
import { EscuelasSupervisorComponent } from './escuelas-supervisor/escuelas-supervisor.component';
import { CrearUsuariosSupervisorComponent } from './crear-usuarios-supervisor/crear-usuarios-supervisor.component';
import { DatosSupervisorComponent } from './datos-supervisor/datos-supervisor.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'supervisor', component: InicioSupervisorComponent},
  { path: 'inicio', component: InicioComponent},


  { path: 'user', component: UserComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'escuelas', component: EscuelasComponent},
  { path: 'iye', component: IyeComponent},
  { path: 'iysine', component: IngresolosComponent},
  { path: 'pdf', component: DocumentoComponent},




  { path: 'supervisor_escuelas', component: EscuelasSupervisorComponent},
  { path: 'datos_supervisor', component: DatosSupervisorComponent},
  

  { path: 'crear-usuarios', component: CrearUsuariosComponent},
  { path: 'crear-escuela', component: CrearEscuelaComponent},
  { path: 'crear-categoria', component: CrearCategoriaComponent},
  { path: 'crear-categoriaing', component: CrearCategoriaingComponent},
  { path: 'crear-egreso', component: CrearEgresoComponent},
  { path: 'crear-ingreso', component: CrearIngresoComponent},
  { path: 'crear-egr_archivo/:id', component: CrearEgresoarchivoComponent},
  { path: 'crear-usuarios_supervisor', component: CrearUsuariosSupervisorComponent},
  

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
