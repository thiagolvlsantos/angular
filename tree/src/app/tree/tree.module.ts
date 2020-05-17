import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RowComponent } from './row/row.component';
import { TreeComponent } from './tree.component';

@NgModule({
  declarations: [
    TreeComponent,
    RowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    TreeComponent,
    RowComponent,
    NgbModule,
    FontAwesomeModule
  ]
})
export class TreeModule { }
