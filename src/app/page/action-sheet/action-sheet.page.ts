import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  [x: string]: any;
pageTitle: string = '';
  constructor(public actionSheetController:ActionSheetController ) { }

  ngOnInit() {
  }

  ShowActionSheet(){
this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'What do you want to do with this?',
      cssClass: "my-custom-color",
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: "trash",
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: "share-social",
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: "close",
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

}