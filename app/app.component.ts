import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Name:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Hi, {{name}}!</h1>`
})
export class AppComponent {
    name= '';
}