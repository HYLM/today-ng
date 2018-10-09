import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SummaryComponent} from './summary.component';
import {InitGuardService} from '../../services/init-guard/init-guard.service';

const routers: Routes = [{
  path: 'summary', component: SummaryComponent, pathMatch: 'full', canActivate: [InitGuardService]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  declarations: []
})
export class SummaryRoutingModule {
}
