import Swal from 'sweetalert2';

export class Mensagens {
  static sucesso(mensagem: string, toast = true) {
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: mensagem,
      timer: 2500,
      timerProgressBar: true,
      toast,
      showConfirmButton: false,
      position: 'top-right',
    });
  }

  static formatarMensagens(mensagens: any[]): string {
    let saida = '<ul>';
    for (let i = 0; i < mensagens.length; i++) {
      saida += `<li><i class="fas fa-exclamation-circle"></i>${mensagens[i].message}</li>`;
    }
    return saida + '</ul>';
  }

  static erro(mensagens: any[], toast = true) {
    Swal.fire({
      icon: 'error',
      iconHtml: '',
      position: 'top-end',
      timerProgressBar: true,
      toast,
      title: 'Ocorreu um erro',
      html: this.formatarMensagens(mensagens),
      //showConfirmButton: false,
    });
  }
}
