import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sign-in',
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss'],
  standalone: true
})
export class SignIn {
  value1: string

}
