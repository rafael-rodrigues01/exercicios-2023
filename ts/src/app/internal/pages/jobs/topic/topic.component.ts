import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../models/topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() topic!: Topic;

  constructor() { }

  ngOnInit(): void {
  }

}
