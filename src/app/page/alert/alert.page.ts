import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCTRL:AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertCTRL.create({
      header:'Alert',
      cssClass: "my-custom-color2",
      subHeader:'This is an alert accept carefully',
      message: 'nah just click in "Acept".',
      buttons: ['Acept']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}