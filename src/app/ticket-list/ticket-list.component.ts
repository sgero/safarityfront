import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  constructor(private generalService: GeneralService) {}
  getTicketListPdf() {
    this.generalService.generateTicketListPdf().subscribe((data: any) => {
      let downloadURL = window.URL.createObjectURL(data);
      let link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'ticket-list.pdf';
      link.click();
    })
  }

}
