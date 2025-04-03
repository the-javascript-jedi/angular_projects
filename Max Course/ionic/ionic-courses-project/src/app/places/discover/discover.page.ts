import { Component, OnInit } from '@angular/core';
import { t } from '@angular/core/weak_ref.d-Bp6cSy-X';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
