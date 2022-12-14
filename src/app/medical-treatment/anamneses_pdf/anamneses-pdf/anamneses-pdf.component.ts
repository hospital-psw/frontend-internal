import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AnamnesesPdfDTO } from '../../interface/AnamnesesPdfDTO';
import { AnamnesisPdfService } from '../../service/anamnesis-pdf.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-anamneses-pdf',
  templateUrl: './anamneses-pdf.component.html',
  styleUrls: ['./anamneses-pdf.component.scss']
})
export class AnamnesesPdfComponent {
  
  selectedAppointmentId:string | null;
  checked = true;
  anamnesesPdfDto:AnamnesesPdfDTO;
  descriptionSelected:boolean;
  symptomsSelected:boolean;
  prescriptionsSelected:boolean;

  constructor(private route: ActivatedRoute,
              private anamnesisPdfService: AnamnesisPdfService,
              private toastService: ToastrService,)
               {}

  ngOnInit(){
    this.selectedAppointmentId = this.route.snapshot.paramMap.get('id')
    this.anamnesesPdfDto = {
      appointmentId: -1,
      areRecepiesSelected:false,
      areSymptomsSelected: false,
      isDescriptionSelected: false,
    };
  }


  confirm(){
    this.anamnesesPdfDto.appointmentId =  +this.selectedAppointmentId!;
    this.anamnesesPdfDto.areRecepiesSelected = this.prescriptionsSelected;
    this.anamnesesPdfDto.areSymptomsSelected = this.symptomsSelected;
    this.anamnesesPdfDto.isDescriptionSelected = this.descriptionSelected;
    
    this.anamnesisPdfService
      .generateAnamnesisPdf(this.anamnesesPdfDto)
      .subscribe(
        (response: AnamnesesPdfDTO) => {
          this.toastService.success('Pdf created');
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(error.message);
        }
      );

  }
} 
