import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faChevronDown, faChevronRight, faChevronUp, faCog, faFolder, faFolderOpen, faMinusSquare, faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
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
export class TreeModule {
  constructor(library: FaIconLibrary) {
    //library.addIcons(faChevronDown, faChevronRight, faChevronUp, faCog, faFolder, faFolderOpen, faMinusSquare, faPlus, faPlusSquare);
    library.addIconPacks(fas);
  }
}
