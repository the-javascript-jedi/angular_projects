import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonItemSliding, NavController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: false
})
export class OffersPage implements OnInit {

  offerrs: Place[] = [];


  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offerrs = this.placesService.places;
  }
  onDeleteOffer(offerId: string) {
    console.log("deletye offer");
  }
  onEditOffer(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
  }
}
