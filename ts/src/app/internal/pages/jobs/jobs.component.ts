import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  showContent: boolean = false;
  linkText: string = 'ver mais';

  constructor() {}

  ngOnInit(): void {}

  showMoreContent(event: Event): void {
    event.preventDefault();

    const showContentIsTrue: boolean = !this.showContent;

    this.linkText = showContentIsTrue ? 'ver menos' : 'ver mais';

    if (!this.showContent) {
      this.showContent = true;
    } else {
      this.showContent = false;
    }
  }
}
