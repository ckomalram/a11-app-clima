import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ciudad: string;
  temperatura = 0;
  humedad = 0;
  clima='';
  climaDetalles='';
  query= false;
  loading:boolean= false;
  mostrarError= false;

  constructor(private climaService: ClimaService) {
    this.ciudad = '';
   }

  ngOnInit(): void {
  }
  obtenerClima(){
    // console.log(this.ciudad);
    this.query=false;
    this.loading = true;
     this.climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.query=true;

      this.temperatura= data.main.temp - 273;
      this.humedad= data.main.humidity;
      this.clima = data.weather[0].main;
      this.climaDetalles = data.weather[0].description;
     }, error => {
       console.log(error);
       this.loading = false;
       this.errorCiudad();
     });
  }

  errorCiudad(){
    this.mostrarError = true;

    setTimeout(() => {
      this.mostrarError= false;
      this.ciudad= '';
    }, 3000);
  }

}
