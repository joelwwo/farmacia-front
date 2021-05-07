import Swal from 'sweetalert2';

export class Mensagens {
  static sucesso(mensagem: string, toast = false) {
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: mensagem,
      timer: 2500,
      toast,
      showConfirmButton: false,
      timerProgressBar: true,
      position: 'top-right',
    });
  }

  static formatarMensagens(mensagens: any[]): string {
    let saida = '<ul id="lista-erros">';
    for (let i = 0; i < mensagens.length; i++) {
      saida += `<li><i class="fas fa-exclamation-circle"></i>${mensagens[i].message}</li>`;
    }

    return saida + '</ul>';
  }

  static erro(mensagens: any[]) {
    Swal.fire({
      icon: 'error',
      iconHtml: '',
      position: 'top-end',
      timerProgressBar: true,
      title: 'Ocorreu um erro',
      html: this.formatarMensagens(mensagens),
      showConfirmButton: false,
    });
  }
}
