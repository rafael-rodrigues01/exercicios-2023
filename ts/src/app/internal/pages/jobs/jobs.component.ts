import { Component, OnInit } from '@angular/core';
import { TopicsService } from './services/topics.service';
import { Topic } from './models/topic.model';

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
  valorDoInput: string = '';
  topicValue: string = '';
  contentValue: string = '';
  topics: Topic[] = [];

  constructor(private topicsService: TopicsService) {}

  ngOnInit(): void {
    this.topicsService.topics.subscribe((topics) => {
      console.log(topics);
      this.topics = topics;
    });
  }

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

  toggleElement(): void {
    this.showForm = !this.showForm;
    this.showContent = !this.showContent;
  }

  showAnsweredTopic(event: Event): void {
    event.preventDefault();

    this.showForm = !this.showForm;
    this.showTopic = false;
    this.showTopic = !this.showTopic;

    this.topicsService.addTopic({
      topic: this.topicValue,
      content: this.contentValue,
      isNewTopic: true,
    });

    [this.topicValue, this.contentValue] = ['', ''];
  }

  showTopicInfo(): void {
    this.showForm = !this.showForm;
    this.showTopic = !this.showTopic;
  }
}
