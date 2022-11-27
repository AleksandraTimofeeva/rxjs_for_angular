import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  readonly form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly modal: NgbActiveModal
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]]
    })
  }

  save() {
    this.modal.close({
      ...this.form.value
    })
  }
}
