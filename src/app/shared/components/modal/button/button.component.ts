import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.styl'],
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Input() loading = false;

  constructor() {}

  ngOnInit() {}
}
