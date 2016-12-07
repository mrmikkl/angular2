import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  singleMessage = `I am a lone message.`;

  messages = ["You've got mail!",
    "Yeah that's cool",
    "It is totally impressive!"];

  constructor() { }

}
