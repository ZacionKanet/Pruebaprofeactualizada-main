import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; //Importar componente de geolocalizacion
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {

  constructor(private toastController: ToastController, private navCtrl: NavController,) {} // controladores del toast y la navegación

async obtenerMiUbicacion(){ //función asincrónica para obtener ubicación
  let ubicacion = await Geolocation.getCurrentPosition(); //cuando se termine de obtener la variable "ubicacion" será igual a la posicion actual


  // generar variable texto de ubicación para ser mostrado en el toast
  let ubicacionTexto = "Latitud:"+ubicacion.coords.latitude +" Longitud:"+ubicacion.coords.longitude

  console.log(ubicacion) //mostrar datos en consola
  this.mostrarToast(ubicacionTexto) //método para mostrar la variable texto al pulsar el botón
}

// toast donde mostraremos los datos
async mostrarToast(mensaje: string) { //mostrar los datos con el parámetro "mensaje" del tipo string
  const toast = await this.toastController.create({
    message: mensaje, //qué se va a mostrar en el toast
    duration: 2000,
    position: 'top',
  });

  await toast.present();
}

volver() {
  this.navCtrl.navigateBack(['']);
}
  ngOnInit() {
  }

}
