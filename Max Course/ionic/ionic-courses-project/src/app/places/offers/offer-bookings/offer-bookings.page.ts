import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: false
})
export class OfferBookingsPage implements OnInit {
  // place: Place = {
  //   id: '0',
  //   title: '',
  //   description: '',
  //   imageUrl: '',
  //   price: 0
  // };

  place: Place | null = null;


  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }

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
