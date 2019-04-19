import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-release-discount',
  templateUrl: './release-discount.component.html',
  styleUrls: ['./release-discount.component.css']
})
export class ReleaseDiscountComponent implements OnInit {

  paperId: string;
  validateForm: FormGroup;

  constructor(private route: ActivatedRoute,  private fb: FormBuilder) { }

  ngOnInit() {
    this.paperId = this.route.snapshot.paramMap.get('paperId');
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    console.log("get parperId "+this.paperId);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}