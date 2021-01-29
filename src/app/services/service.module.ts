import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService,
  HospitalService,
  MedicoService
} from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
@NgModule({
  declarations: [],
  providers: [SettingsService, SidebarService, SharedService, UsuarioService,LoginGuardGuard, SubirArchivoService,ModalUploadService,HospitalService,MedicoService],
  imports: [CommonModule, HttpClientModule],
})
export class ServiceModule {}
