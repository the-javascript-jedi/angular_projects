import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateBookingComponent implements OnInit {

  //passed value as props for the modal
  @Input() selectedPlace: Place | null = null;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onCancel() {
    // if id - booking-modal is not mentioned the nearest available model is dismissed
    this.modalCtrl.dismiss(null, 'cancel', 'booking-modal');
  }
  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'This is an Information Message!' }, 'confirm', 'booking-modal');
  }
}
