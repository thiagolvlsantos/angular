import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() depth: number = 1;
  @Input() path: any[] = [];
  @Input() nodes: any[] = [];
  @Input() children: (n: any) => any[];

  constructor() { }

  ngOnInit(): void {
  }

  siblingBefore(n: any) { }
  siblingAfter(n: any) { }
  childStart(n: any) {
    let date = new Date().getTime();
    let tmp = { id: '' + date, name: '' + date };
    if (this.children(n)) {
      n.children = [tmp, ...this.children(n)];
    } else {
      n.children = [tmp];
    }
  }
  childEnd(n: any) {
    let date = new Date().getTime();
    let tmp = { id: '' + date, name: '' + date };
    if (this.children(n)) {
      n.children = [...this.children(n), tmp];
    } else {
      n.children = [tmp];
    }
  }
}
