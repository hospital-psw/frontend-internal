import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AnamnesisService } from './../../services/anamnesis.service';
import { Anamnesis } from './../../interface/Anamnesis';
import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-anamnesis-tab',
  templateUrl: './anamnesis-tab.component.html',
  styleUrls: ['./anamnesis-tab.component.scss'],
})
export class AnamnesisTabComponent implements OnInit {
  anamnesis: Anamnesis[] = [];
  selectedAnamnesis: Anamnesis;
  typedInput: string = '';

  constructor(
    private anamnesisService: AnamnesisService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAnamnesis();
    this.selectedAnamnesis = {
      id: null as any,
      appointment: null as any,
      description: '',
      symptoms: [],
      prescriptions: [],
    };
  }

  getAnamnesis(): void {
    this.anamnesisService.getAnamnesis().subscribe(
      (response: Anamnesis[]) => {
        this.anamnesis = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  onInputChange(event: any): void {
    if (this.typedInput === undefined) {
      return;
    }
    if (this.typedInput === '') {
      this.getAnamnesis();
      return;
    }
    this.selectedAnamnesis = {
      id: null as any,
      appointment: null as any,
      description: '',
      symptoms: [],
      prescriptions: [],
    };
    this.anamnesisService.searchAnamnesis(this.typedInput).subscribe(
      (response: Anamnesis[]) => {
        this.anamnesis = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  onSelect(anamnesis: Anamnesis): void {
    this.selectedAnamnesis = anamnesis;
  }
}
