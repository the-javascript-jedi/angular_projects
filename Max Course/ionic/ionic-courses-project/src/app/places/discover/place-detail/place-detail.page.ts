import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from 'src/app/models/place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute, private placesService: PlacesService, private modalCtrl: ModalController) { }
  place: Place | null = null;
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      const placeId = paramMap.get('placeId')!;
      const fetchedPlace = this.placesService.getPlace(placeId);

      if (!fetchedPlace) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place = fetchedPlace;
    });
  }

  onBookplace() {
    console.log('Booking place...');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // componentProps used to send data inside the modal it will be received as an Input value
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place },
      id: 'booking-modal'
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('Confirmed!');
        console.log(resultData.data.message);
      } else {
        console.log('Cancelled!');
      }
    })
  }
}