import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-release-endorse',
  templateUrl: './release-endorse.component.html',
  styleUrls: ['./release-endorse.component.css']
})
export class ReleaseEndorseComponent implements OnInit {

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
