import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

      const placeId = paramMap.get('placeId')!;
      console.log("placeId", placeId)
    });
  }

  onBookplace() {
    console.log('Booking place...');
    // this.router.navigate(['/places/tabs/discover']);
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}