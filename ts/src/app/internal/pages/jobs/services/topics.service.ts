import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  private topicsSubject: BehaviorSubject<Topic[]> = new BehaviorSubject<
    Topic[]
  >([
    {
      topic: 'Assunto da pergunta aparece aqui',
      content:
        'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...',
      isNewTopic: false,
    },
    {
      topic: 'Assunto da pergunta aparece aqui',
      content:
        'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...',
      isNewTopic: false,
    },
  ]);
  public topics: Observable<Topic[]> = this.topicsSubject.asObservable();

  constructor() {}

  addTopic(topic: Topic): void {
    this.topicsSubject.next([...this.topicsSubject.value, topic]);
  }
}
