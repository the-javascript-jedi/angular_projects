import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from '../places.service';
import { MenuController, SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];
  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }
  onOpenMenu() {
    this.menuCtrl.toggle();
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>|string) {
    if (typeof event === 'string') {
      // If it's a string, use it directly
      console.log(event);
      // Filter using the string value
      // this.loadedPlaces = this.placesService.places.filter(place => {
      //   return place.title.toLowerCase().includes(event.toLowerCase());
      // });
    } else {
      // If it's an event, access the value property safely
      console.log(event);
      const value = event.detail?.value;
      console.log('Value:', value);
      // Filter using the event value
      // this.loadedPlaces = this.placesService.places.filter(place => {
      //   return place.title.toLowerCase().includes(value.toLowerCase());
      // });
    }
  }
}
