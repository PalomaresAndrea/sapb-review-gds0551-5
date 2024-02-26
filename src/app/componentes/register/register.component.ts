import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../shared/password-match.directives';
import { privateDecrypt } from 'crypto';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Auth } from '../../interfaces/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm=this.fb.group({
    fullname:['', [Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  },{
    validators: passwordMatchValidator
  });

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private messageService:MessageService,
    private router:Router
    ){

  }

  get email(){
    return this.registerForm.controls['email']
  }

  get fullname(){
    return this.registerForm.controls['fullname']
  }

  get password(){
    return this.registerForm.controls['password']
  }

  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
  }

  enviarUsuario(){
    console.log("Estoy enviando datos")

    const datos = { ...this.registerForm.value}
    delete datos.confirmPassword;

    this.authService.registerUser(datos as Auth).subscribe(
      response=>{
        this.messageService.add({
          severity:'success',
          summary:'Registro Exitoso',
          detail:'El usuario ha sida registrado con Exito'
        });
        this.router.navigate(['login'])
      },
      error=>{
        this.messageService.add({
          severity:'error',
          summary:'Error al insertar el usuario',
          detail:'Hubo un error al Agregar Usuario consulte al Administrador'
        });

      }
    )
  }
}