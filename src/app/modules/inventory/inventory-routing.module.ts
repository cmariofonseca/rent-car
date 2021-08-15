import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RentComponent } from './components/rent/rent.component';
import { TrademarksComponent } from './components/trademarks/trademarks.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'rent',
        children: [
          { path: '', component: RentComponent },
          {
            path: 'trademarks/:id',
            children: [
              { path: '', component: TrademarksComponent }
            ]
          }
        ]
      },
      { path: '**', redirectTo: 'welcome' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }