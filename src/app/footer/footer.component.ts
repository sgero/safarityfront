import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  constructor(
    private generalService: GeneralService,
    public router: Router
  ) {
  }


}
