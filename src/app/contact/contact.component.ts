import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  sending = false;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder, private contact: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.successMsg = '';
    this.errorMsg = '';
    if (this.contactForm.invalid) return;

    this.sending = true;
    try {
      await this.contact.send(this.contactForm.value);
      this.successMsg = 'Thanks for your interest! Your message has been sent.';
      this.contactForm.reset();
      this.submitted = false;
    } catch (e) {
      console.error(e);
      this.errorMsg = 'Sorry, something went wrong sending your message.';
    } finally {
      this.sending = false;
    }
  }

}
