import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: false
})
export class EditOfferPage implements OnInit {

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }
  place: Place | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      const placeId = paramMap.get('placeId')!;
      const fetchedPlace = this.placesService.getPlace(placeId);

      if (!fetchedPlace) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = fetchedPlace;
    });
  }

}
