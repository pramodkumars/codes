import { Component, Input } from '@angular/core';

@Component({
  selector: 'kitaboolab',
  templateUrl: './kitaboo.component.html',
  styleUrls: ['./kitaboo.component.scss']
})
export class KitabooComponent {
  @Input() input = '' ;


  public showAlert(event:any)
  {
    alert(this.input);
  }
}
