import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import {ChildParamsComponent} from "../../_misc/child-params.component";
import {RoutingService} from "../../_services/routing.service";
import {PhotoService} from "../../_services/photo.service";
import {Utils} from "../../_services/utils.service";
import {MessagesService} from "../../_services/messages.service";

@Component({
  selector: 'msl-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent extends ChildParamsComponent implements OnInit {
  html: string;
  next: false;
  prev: false;
  pageNum: 0;

  constructor(public photoSvc: PhotoService,
              private msgSvc: MessagesService,
              protected route: ActivatedRoute,
              protected routingSvc: RoutingService) {
    super(route, routingSvc);
  }

  ngOnInit() {
    super.ngOnInit();

    this.photoSvc.displayPhotos$                                                                  .do(Utils.log('photo'))
      .subscribe(result => {
        Object.assign(this, result);
        if (result.total)
          this.msgSvc.status(`${result.total} image${Utils.pluralize(result.total)} found`)
        else
          this.msgSvc.blank();
      });
  }

  switchPage(delta: number) {
    this.photoSvc.pageDelta.next(delta);
  }

}
