import Swal from 'sweetalert2';

export class Mensagens {
  static sucesso(mensagem: string, toast = true) {
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: mensagem,
      timer: 2000,
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

  static erro(mensagens: any[] | string, toast = true, timer = 0) {
    Swal.fire({
      icon: 'error',
      iconHtml: '',
      position: 'top-end',
      timerProgressBar: true,
      timer,
      toast,
      title: 'Ocorreu um erro',
      html: Array.isArray(mensagens)
        ? this.formatarMensagens(mensagens)
        : `<p>${mensagens}</p>`,
      showConfirmButton: timer ? false : true,
    });
  }
}
