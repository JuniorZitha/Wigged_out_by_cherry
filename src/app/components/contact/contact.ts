import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
  if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
    // Create WhatsApp message
    const whatsappNumber = '27814430013'; // Your number in international format (27 is South Africa code)
    const message = `Hello! My name is ${this.contactForm.name}.

Email: ${this.contactForm.email}
Phone: ${this.contactForm.phone || 'Not provided'}

Message:
${this.contactForm.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Show success message
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    }, 3000);
  }
}
  }
