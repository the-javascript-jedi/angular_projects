import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute, private placesService: PlacesService) { }
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
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}