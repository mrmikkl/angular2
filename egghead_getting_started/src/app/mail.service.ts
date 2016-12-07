import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  singleMessage = `I am a lone message.`;

  messages = [
    { id: 0, text: "You've got mail!" },
    { id: 1, text: "Yeah that's cool" },
    { id: 2, text: "It is totally impressive!" }
  ];

  constructor() { }

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }
}
