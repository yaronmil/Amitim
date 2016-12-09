import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgTreeTabComponent } from './org-tree-tab.component';
import { ProcessesListComponent } from './processes-list/processes-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrgTreeTabComponent, ProcessesListComponent]
})
export class OrgTreeTabModule { }
