import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { TreetableComponent } from './treetable/treetable.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavbarComponent,
    children: [{
      path: 'address',
      component: AddressComponent
    }, {
      path: 'table',
      component: TableComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: 'tree',
      component: TreeComponent
    }, {
      path: 'treetable',
      component: TreetableComponent
    }, {
      path: 'drag-drop',
      component: DragDropComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SchematicRoutingModule { }
