import {Component, OnInit} from '@angular/core';
import {Evento} from "../models/Evento";
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../services/general.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Resenya} from "../models/Resenya";

@Component({
  selector: 'app-resenya',
  templateUrl: './resenya.component.html',
  styleUrls: ['./resenya.component.css']
})
export class ResenyaComponent {
  resenyas: any;






}
