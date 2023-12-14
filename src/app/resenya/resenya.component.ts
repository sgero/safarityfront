import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../services/general.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-resenya',
  templateUrl: './resenya.component.html',
  styleUrls: ['./resenya.component.css']
})
export class ResenyaComponent implements OnInit {

  resenyas: any[]=[]; // Asegúrate de que el tipo coincida con la estructura de tus reseñas

  constructor(private generalService: GeneralService, private router: Router) { }

  ngOnInit() {
    this.cargarResenyas();
  }

  cargarResenyas() {
    this.generalService.listarResenyaSegunEvento(Number(localStorage.getItem('id_evento') || '')).subscribe(
      (data: any) => {
        this.resenyas = data; // Asegúrate de que la respuesta del servicio coincida con la estructura de tus reseñas
        this.resenyas.forEach(resenya => {
          resenya.textoFormateado = this.formatearTexto(resenya.texto);
        });
      },
      error => {
        console.error('Error al cargar las reseñas', error);
      }
    );
  }

  formatearTexto(texto: string): string {
    const palabras = texto.split(' ');
    const fragmentos = [];
    for (let i = 0; i < palabras.length; i += 30) {
      fragmentos.push(palabras.slice(i, i + 30).join(' '));
    }
    return fragmentos.join('\n');
  }
}
