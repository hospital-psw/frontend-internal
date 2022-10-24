import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'bloodbank', component: AllComponent },
  { path: 'bloodbank/add', component: CreateComponent },
  { path: 'bloodbank/:id', component: DetailComponent },  
  { path: 'bloodbank/:id/update', component: UpdateComponent },
];

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    AllComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class BloodBankModule { }
