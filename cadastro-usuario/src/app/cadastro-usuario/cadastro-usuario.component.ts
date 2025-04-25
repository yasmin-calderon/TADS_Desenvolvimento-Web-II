import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: false,
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css',
})
export class CadastroUsuarioComponent {
  formCadastro: FormGroup;

  estados = [
    { valor: 'PR', nome: 'Paraná' },
    { valor: 'SC', nome: 'Santa Catarina' },
    { valor: 'RS', nome: 'Rio Grande do Sul' },
    { valor: 'SP', nome: 'São Paulo' },
    { valor: 'RJ', nome: 'Rio de Janeiro' }
  ];

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.pattern('[0-9]{10,11}')],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      aceitaTermos: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.formCadastro.valid) {
      console.log('Formulário válido!');
      console.log(this.formCadastro.value);
      // Aqui você poderia enviar os dados para um servidor
      alert('Cadastro realizado com sucesso!');
      this.formCadastro.reset();
    } else {
      // Marca todos os campos como touched para mostrar os erros
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  // Função auxiliar para marcar todos os campos como touched
  validarTodosOsCamposDoFormulario(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
    const controle = formGroup.get(campo);
    if (controle instanceof FormGroup) {
      this.validarTodosOsCamposDoFormulario(controle);
    } else {
      controle?.markAsTouched();
    }
    });
  }

  // Métodos auxiliares para tratar erros
  getErrorMessage(campo: string): string {
    const control = this.formCadastro.get(campo);

    if (control?.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    if (control?.hasError('minlength')) {
      return `Deve ter no mínimo ${control.errors?.['minlength'].requiredLength} caracteres`;
    }
    if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }
    return '';
  }


  getAddressErrorMessage(campo: string): string {
    const control = this.formCadastro.get('endereco')?.get(campo);

    if (control?.hasError('required')) {
      return 'Campo obrigatório';
    }
    return '';
  }
}
