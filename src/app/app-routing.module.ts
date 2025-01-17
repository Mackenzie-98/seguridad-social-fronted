import { MainOrdenesComponent } from './components/main-ordenes/main-ordenes.component';
import { InicioMostrarPagoComponent } from './components/inicio-mostrar-pago/inicio-mostrar-pago.component';
import { MainClienteEditarComponent } from './components/main-cliente-editar/main-cliente-editar.component';
import { MainReportesComponent } from './components/main-reportes/main-reportes.component';
import { MainClienteRegistrarComponent } from './components/main-cliente-registrar/main-cliente-registrar.component';
import { MainClientesComponent } from './components/main-clientes/main-clientes.component';
import { MainGenerarOrdenesComponent } from './components/main-generar-ordenes/main-generar-ordenes.component';
import { InicioSolicitudComponent } from './components/inicio-solicitud/inicio-solicitud.component';
import { InicioPrincipalComponent } from './components/inicio-principal/inicio-principal.component';
import { MainUsuariosComponent } from './components/main-usuarios/main-usuarios.component';
import { MainUsuarioEditarComponent } from './components/main-usuario-editar/main-usuario-editar.component';
import { MainUsuarioRegistrarComponent } from './components/main-usuario-registrar/main-usuario-registrar.component';
import { MainUsuarioComponent } from './components/main-usuario/main-usuario.component';
import { MainPlanRegistrarComponent } from './components/main-plan-registrar/main-plan-registrar.component';
import { MainPlanEditarComponent } from './components/main-plan-editar/main-plan-editar.component';
import { MainPlanesComponent } from './components/main-planes/main-planes.component';
import { MainEmpresaComponent } from './components/main-empresa/main-empresa.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { MainComponent } from './components/main/main.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainSolicitudesComponent } from './components/main-solicitudes/main-solicitudes.component';
import { MainSolicitudesEditarComponent } from './components/main-solicitudes-editar/main-solicitudes-editar.component';
import { InicioConsultarOrdenComponent } from './components/inicio-consultar-orden/inicio-consultar-orden.component';
import { InicioMostrarOrdenComponent } from './components/inicio-mostrar-orden/inicio-mostrar-orden.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent,
    children: [
      { path: "", component: InicioPrincipalComponent },
      { path: "signin", component: InicioSignInComponent },
      { path: "afiliacion", component: InicioSolicitudComponent },
      { path: "consultar-orden", component: InicioConsultarOrdenComponent },
      { path: "mostrar-orden", component: InicioMostrarOrdenComponent },
      { path: "mostrar-pago", component: InicioMostrarPagoComponent }
    ]
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "", component: MainInicioComponent },
      { path: 'empresa', component: MainEmpresaComponent },
      { path: 'planes', component: MainPlanesComponent },
      { path: 'plan-editar', component: MainPlanEditarComponent },
      { path: 'plan-registrar', component: MainPlanRegistrarComponent },
      { path: 'perfil', component: MainUsuarioComponent},
      { path: 'usuarios', component: MainUsuariosComponent},
      { path: 'usuario-registrar', component: MainUsuarioRegistrarComponent},
      { path: 'usuario-editar', component: MainUsuarioEditarComponent},
      { path: 'solicitudes', component: MainSolicitudesComponent },
      { path: 'solicitudes-editar', component: MainSolicitudesEditarComponent},
      { path: 'reportes', component: MainReportesComponent},
      { path: 'generar-ordenes', component: MainGenerarOrdenesComponent},
      { path: 'clientes', component: MainClientesComponent},
      { path: 'cliente-registrar', component: MainClienteRegistrarComponent},
      { path: 'cliente-editar', component: MainClienteEditarComponent},
      { path: 'ordenes', component: MainOrdenesComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
