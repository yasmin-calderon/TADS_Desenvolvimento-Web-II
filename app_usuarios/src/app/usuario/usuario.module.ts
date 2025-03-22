import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { InserirUsuarioComponent } from './inserir-usuario/inserir-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';



@NgModule({
  declarations: [
    ListarUsuarioComponent,
    InserirUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarUsuarioComponent,
    InserirUsuarioComponent,
    EditarUsuarioComponent
  ]
})
export class UsuarioModule { }
