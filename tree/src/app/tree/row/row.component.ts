import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() nodes = [];
  @Input() depth = 0;
  @Input() label: TemplateRef<any>;
  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
}
