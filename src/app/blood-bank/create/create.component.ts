import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBank } from '../model/blood-bank.model';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(
    private bloodBankService: BloodBankService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  bloodBank: BloodBank = new BloodBank();

  public form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.email,
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    apiUrl: ['', [Validators.required]],
    getBloodTypeAvailability: ['', [Validators.required]],
    getBloodTypeAndAmountAvailability: ['', [Validators.required]],
  });

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get apiUrl() {
    return this.form.get('apiUrl');
  }
  get getBloodTypeAvailability() {
    return this.form.get('getBloodTypeAvailability');
  }
  get getBloodTypeAndAmountAvailability() {
    return this.form.get('getBloodTypeAndAmountAvailability');
  }

  ngOnInit(): void {
    return;
  }

  public createBloodBank() {
    this.bloodBank = new BloodBank(this.form.value);
    if (this.form.valid) {
      this.bloodBankService.createBloodBank(this.bloodBank).subscribe((res) => {
        this.router.navigate(['/bloodbank']);
      });
    }
  }
}
