import {Component} from '@angular/core';
import {GeneralService} from '../services/general.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  constructor(private generalService: GeneralService) {
  }

  getTicketListPdf() {
    this.generalService.generateTicketListPdf().subscribe(
      (data: any) => {
        // Manejar la respuesta exitosa aquí
        let downloadURL = window.URL.createObjectURL(data);
        let link = document.createElement('a');
        link.href = downloadURL;
        link.download = 'ticket.pdf';
        link.click();
      },
      (error: any) => {
        // Manejar el error aquí
        console.error('Error al generar el PDF:', error);

        // Aquí puedes realizar acciones adicionales en caso de error, como mostrar un mensaje al usuario o realizar otra lógica específica.

        // Por ejemplo, puedes mostrar un mensaje de error al usuario:
        // this.showErrorMessage('Error al generar el PDF. Por favor, inténtelo de nuevo.');

        // O realizar otras acciones según tus necesidades.
      }
    );
  }

  // Función para mostrar mensajes de error al usuario
  private showErrorMessage(message: string) {
    // Implementa la lógica para mostrar el mensaje de error, por ejemplo, utilizando un servicio de notificación.
  }
}
