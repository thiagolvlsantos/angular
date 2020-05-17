import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() depth: number = 0;
  @Input() path: any[] = [];
  @Input() nodes: any[] = [];
  @Input() children: (n: any) => any[];
  @Input() label: TemplateRef<any>;
  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  add(n: any) {
    return [...this.path, n];
  }
}
