import { Component } from '@angular/core';
import { GoogleMap } from "@ionic-native/google-maps";
import { NavController, Platform } from "ionic-angular"
import { AboutPage } from "../about/about";
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private map: GoogleMap;

    constructor(
        public navContoller: NavController,
        public platform: Platform) { }
    openChat() {
        this.navContoller.push(AboutPage);
    }

    initMap() {
        this.platform.ready().then(() => {
            this.map = new GoogleMap('map');
        });
    }
}
