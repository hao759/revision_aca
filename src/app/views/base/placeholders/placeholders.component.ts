import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CardImgDirective, CardTitleDirective, CardTextDirective, ButtonDirective, ColDirective, PlaceholderAnimationDirective, PlaceholderDirective, BgColorDirective } from '@coreui/angular-pro';

@Component({
    selector: 'app-placeholders',
    templateUrl: './placeholders.component.html',
    styleUrls: ['./placeholders.component.scss'],
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, CardImgDirective, CardTitleDirective, CardTextDirective, ButtonDirective, ColDirective, RouterLink, PlaceholderAnimationDirective, PlaceholderDirective, BgColorDirective]
})
export class PlaceholdersComponent {}
