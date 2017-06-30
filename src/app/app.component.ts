import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="panel panel-default"> <div class="panel-heading"><h1>Hello {{name}}</h1> </div><div class="panel-body"> <my-makes-list></my-makes-list></div></div>`,
})
export class AppComponent  { name = 'Angular Task'; }
