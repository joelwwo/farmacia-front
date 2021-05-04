import Swal from 'sweetalert2';

export class Mensagens {
  static sucesso(mensagens: any) {
    Swal.fire({
      icon: 'success',
      title: mensagens.title,
      text: mensagens.message,
      timer: 1200,
      timerProgressBar: true,
    });
  }

  static formatarMensagens(mensagens: object[]): string {
    let saida = '<ul id="lista-erros">';
    for (let i = 0; i < mensagens.length; i++) {
      for (let [key, value] of Object.entries(mensagens[i])) {
        Object.entries(value).forEach(([key, value]) => {
          saida += `<li><i class="fas fa-exclamation-circle"></i>${value}</li>`;
        });
      }
    }

    return saida + '</ul>';
  }

  static erro(mensagens: any) {
    Swal.fire({
      icon: 'error',
      iconHtml: '',
      position: 'top-end',
      timerProgressBar: true,
      title: mensagens?.title || 'Ocorreu um erro inesperado',
      html:
        mensagens?.errors?.[0]?.detail ||
        this.formatarMensagens(mensagens.errors as object[]),
      showConfirmButton: false,
    });
  }
}
