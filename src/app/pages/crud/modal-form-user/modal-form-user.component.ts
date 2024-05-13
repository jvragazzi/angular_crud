import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {

  formUser: FormGroup;
  editUser: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    if(this.data &&this.data.name){
      this.editUser = true;
    }
  }

  saveUser() {
    const objUserForm: User = this.formUser.getRawValue();

    if(this.data && this.data.name) {

      this.userService.update(this.data.firebaseId, objUserForm).then(
        (response: any) => {
          window.alert('Usuário editado com sucesso!');
          this.closeModal();
        }
      ).catch(err => {
        window.alert('Erro ao editar usuário!');
        console.error(err);
      });

    } else {
      this.userService.addUser(objUserForm).then(
        (response: any) => {
          window.alert('Usuário cadastrado com sucesso!');
          this.closeModal();
        }
      ).catch(err => {
        window.alert('Erro ao cadastrar usuário!');
        console.error(err);
      });
    }
  }


  buildForm() {
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      tel: [null, [Validators.required, Validators.minLength(8)]],
      role: [null, [Validators.required, Validators.minLength(2)]],
    });

    if(this.data && this.data.name) {
      this.fillForm();
    }
  }

  fillForm() {
    this.formUser.patchValue({
      name: this.data.name,
      email: this.data.email,
      tel: this.data.tel,
      role: this.data.role,
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

}
