import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BloodRequestService } from '../services/blood-request.service';
import { BloodRequest } from '../../Model/BloodRequest';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.scss'],
})
export class RequestEditComponent implements OnInit {
  bloodRequest: BloodRequest = new BloodRequest();
  public form!: FormGroup;

  constructor(
    private bloodRequestService: BloodRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bloodRequestService
        .getBloodRequestId(params['id'])
        .subscribe((res) => {
          this.bloodRequest = res;
          this.form = this.formBuilder.group({
            date: [this.bloodRequest.date],
            bloodType: [this.bloodRequest.bloodType],
            amount: [this.bloodRequest.amount],
            reason: [this.bloodRequest.reason],
            managerComment: [this.bloodRequest.managerComment],
          });
        });
    });
  }

  public editBloodRequest() {
    const editBloodRequest = new BloodRequest(this.form.value);
    editBloodRequest.id = this.bloodRequest.id;

    this.bloodRequestService.editRequest(editBloodRequest).subscribe((res) => {
      this.router.navigate(['/reconsider-blood-request']);
    });
  }
}
