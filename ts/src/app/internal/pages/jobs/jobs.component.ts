import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  showContent: boolean = false;
  showText: boolean = false;
  showForm: boolean = false;
  showTopic: boolean = false;
  linkText: string = 'ver mais';
  valorDoInput: string = ''

  constructor() {}

  ngOnInit(): void {}

  showMoreContent(event: Event): void {
    event.preventDefault();

    const showTextIsTrue: boolean = !this.showText;

    this.linkText = showTextIsTrue ? '' : 'ver mais';

    if (!this.showText) {
      this.showText = true;
    } else {
      this.showText = false;
    }
  }

  toggleElement() :void {
    this.showForm = !this.showForm;
    this.showContent = !this.showContent;
    
  }

  showAnsweredTopic (event: Event): void {
    event.preventDefault();

    this.showForm = !this.showForm;
    this.showTopic = false;
    this.showTopic = !this.showTopic;
  }

  showTopicInfo():void {
    this.showForm = !this.showForm;
    this.showTopic = !this.showTopic;
  }
}
