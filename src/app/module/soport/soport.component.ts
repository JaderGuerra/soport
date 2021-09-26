import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soport',
  templateUrl: './soport.component.html',
  styleUrls: ['./soport.component.css'],
})
export class SoportComponent implements OnInit {
  casos: any = [
    { item: 'Unificar Pacientes', url: 'UnificarPacientes' },
    { item: 'Cambio De Sede', url: 'CambioDeSede' },
    { item: 'Eliminar Concepto', url: 'EliminarConcepto' },
    { item: 'Eliminar Controles', url: 'EliminarControles' },
    { item: 'Actualizar CC', url: 'ActualizarCC' },
    { item: 'Cambiar Fecha de Ingreso', url: 'CambiarFechaIngreso' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigation(url: string) {
    console.log(url);
    this.router.navigate(['/soporte', url]);
  }
}
