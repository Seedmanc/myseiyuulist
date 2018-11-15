import { Component } from '@angular/core';
import {RoutingService} from "./_services/routing.service";
import {SeiyuuService} from "./_services/seiyuu.service";
import {AnimeService} from "./_services/anime.service";
import {PhotoService} from "./_services/photo.service";
import {MagazineService} from "./_services/magazine.service";

@Component({
  selector: 'msl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RoutingService, SeiyuuService, AnimeService, MagazineService, PhotoService]
})
export class AppComponent {
  constructor(public seiyuuSvc: SeiyuuService) {
    console.clear();
  }
}
