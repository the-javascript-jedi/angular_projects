import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';
import { OffersPage } from './offers/offers.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
          },
          {
            path: ':placeId',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
        ]
      },
      // {
      //   path: 'offers',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('./offers/offers-routing.module').then(m => m.OffersPageRoutingModule)
      //     },
      //     // {
      //     //   path: ':placeId',
      //     //   loadChildren: () => import('./discover/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
      //     // },
      //   ]
      // },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
          },
          {
            path: 'edit/:placeId',
            loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule)
          },
          {
            path: ':placeId',
            loadChildren: () => import('./offers/offer-bookings/offer-bookings-routing.module').then(m => m.OfferBookingsPageRoutingModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: "/places/tabs/discover",
        pathMatch: 'full'
      }
    ]
  },
  // for lazy loading the page give epty path and redirect here
  {
    path: '',
    redirectTo: "tabs/discover",
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule { }
