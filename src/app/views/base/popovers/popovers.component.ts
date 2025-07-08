import { Component, OnInit } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ButtonDirective, PopoverDirective } from '@coreui/angular-pro';

@Component({
    selector: 'app-popovers',
    templateUrl: './popovers.component.html',
    styleUrls: ['./popovers.component.scss'],
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, PopoverDirective]
})
export class PopoversComponent implements OnInit {

  visible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = !this.visible;
    }, 3000);
  }

}
