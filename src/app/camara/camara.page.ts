import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera'; //Importar plugin de cámara capacitor
import { CameraDirection, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { DomSanitizer } from '@angular/platform-browser'; // Importar para prevenir errores XSS
import { Router } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage {
  imageSource:any;//para que la variable "imagesource" pueda contener datos de cualquier tipo

  constructor(private domSanitizer:DomSanitizer, private router: Router,) {} //inicializar domsanitizer y router
//Ejemplo de constructor de capacitor docs
  takePicture = async () => { //función asincrónica para tomar la foto
    const image = await Camera.getPhoto({ //constante "image" será la foto que tomemos con la cámara
      quality: 90, // calidad de la imagen
      allowEditing: true, //permitir edición de la imagen
      resultType: CameraResultType.Uri, // cómo generar el resultado de la cámara 
      source:CameraSource.Prompt, //para que se pregunte al usuario de donde obtener la foto
      saveToGallery:true     //guardar o no la foto en la galería
    });    
    
    //this.imageSource ='data:image/jpeg;base64,' + image.base64String;
    //console.log(this.imageSource)

  // Operación de seguridad para tomar la imagen de "image.webPath", marcarla como segura
  // con "this.domSanitizer.bypassSecurityTrustUrl(...)" y el resultado asignarlo a "this.imageSource"
  // para su uso en la app
    this.imageSource=this.domSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : "")
  }
// Función del botón para tomar la foto
  getPhoto()
  {
    return this.imageSource;
  }
// Función del botón para ir a la página de geolocalización
  irGeo() {
    this.router.navigate(['/geo']); 
  }
}
