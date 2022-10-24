import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRoomsComponent } from './Manager/view-rooms/view-rooms.component';

const routes: Routes = [
  {path: 'display', component: ViewRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
