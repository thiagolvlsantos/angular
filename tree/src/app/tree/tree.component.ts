import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight, faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  faChevronRight = faChevronRight;

  @Input() depth = 1;
  @Input() nodes = [];

  constructor() { }

  ngOnInit(): void {
  }
}
