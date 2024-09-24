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
      subHeader:'subtitle',
      message: 'This is an alert message.',
      buttons: ['Ok']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}