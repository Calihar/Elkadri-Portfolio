import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { ContactPayload } from '../models/contact-payload';

export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: 'service_ls2w28f',
  EMAILJS_TEMPLATE_ID: 'template_mughgfj',
  EMAILJS_PUBLIC_KEY: 'ADINT0Ufq2bHRapGg'
};


@Injectable({ providedIn: 'root' })
export class ContactService {
  async send(payload: ContactPayload): Promise<void> {
    const params = {
      from_name: payload.name,
      reply_to: payload.email,
      message: payload.message,
      // add anything else you want to pass to the template
    };

    await emailjs.send(
      environment.EMAILJS_SERVICE_ID,
      environment.EMAILJS_TEMPLATE_ID,
      params,
      { publicKey: environment.EMAILJS_PUBLIC_KEY }
    );
  }
}