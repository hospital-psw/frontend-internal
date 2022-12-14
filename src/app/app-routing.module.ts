import { ApplicationMainComponent } from './application-main/application-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/components/login-page/login-page.component';
import { UrgentBloodRequestComponent } from './BloodManagment/UrgentBloodRequest/urgent-blood-request/urgent-blood-request.component';
import { CreateTenderComponent } from './tenders/create-tender/create-tender.component';
import { BlockPatientsViewComponent } from './Manager/block-patients/block-patients-view/block-patients-view.component';

const routes: Routes = [
  {
    path: 'app',
    component: ApplicationMainComponent,
    loadChildren: () =>
      import('./application-main/user-routing/user-routing.module').then(
        (x) => x.UserRoutingModule
      ),
  },
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
