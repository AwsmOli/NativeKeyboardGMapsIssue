import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

declare var NativeKeyboard;

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    constructor(public viewController: ViewController) {

    }

    ionViewDidEnter() {
        NativeKeyboard.showMessenger({
            onSubmit: function (text) {
                console.log("The user typed: " + text);
            },
            backgroundColor: "#FF0000",
            textViewBackgroundColor: "#FF0000"
        });
    }

    ionViewWillLeave() {
        NativeKeyboard.hideMessenger();
    }

}
