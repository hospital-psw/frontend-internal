import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BloodBank } from '../model/blood-bank.model';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  bloodBank: BloodBank = new BloodBank();
  public form!: FormGroup;
  
  constructor(private bloodBankService: BloodBankService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bloodBankService.getBloodBank(params['id']).subscribe(res => {
        this.bloodBank = res;
        this.form = this.formBuilder.group({
            name: [this.bloodBank.name, [Validators.required]],
            email: [this.bloodBank.email, [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            apiUrl: [this.bloodBank.apiUrl, [Validators.required]],
            getBloodTypeAvailability: [this.bloodBank.getBloodTypeAvailability, [Validators.required]],
            getBloodTypeAndAmountAvailability: [this.bloodBank.getBloodTypeAndAmountAvailability, [Validators.required]]
          });
      });
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get apiUrl() { return this.form.get('apiUrl'); }
  get getBloodTypeAvailability() { return this.form.get('getBloodTypeAvailability'); }
  get getBloodTypeAndAmountAvailability() { return this.form.get('getBloodTypeAndAmountAvailability'); }


  public updateBloodBank() {
    const updatedBloodBank = new BloodBank(this.form.value);
    updatedBloodBank.id = this.bloodBank.id;
    if(this.form.valid) {
      this.bloodBankService.updateBloodBank(updatedBloodBank).subscribe(res => {
        this.router.navigate(['/bloodbank']);
      });
    }
  }
}
