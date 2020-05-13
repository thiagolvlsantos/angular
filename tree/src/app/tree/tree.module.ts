import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RowComponent } from './row/row.component';
import { TreeComponent } from './tree.component';

@NgModule({
  declarations: [
    TreeComponent,
    RowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TreeComponent,
    RowComponent
  ]
})
export class TreeModule { }
