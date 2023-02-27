import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'kitaboolab';
  @Input() Input:string='';

  public showAlert(event:any)
  {
    alert(event);
  }
}
