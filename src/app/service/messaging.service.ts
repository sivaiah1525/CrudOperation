import { TokenservService } from './../token/tokenserv.service';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private puastokenserve: TokenservService
  ) {

    this.angularFireMessaging.messaging.subscribe((mess) => {
      mess.onMessage = mess.onMessage.bind(mess);
      mess.onTokenRefresh = mess.onTokenRefresh.bind(mess);
    }
    );
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        this.puastokenserve.savetoken(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log('new message received. ', payload);
        this.currentMessage.next(payload);
      });
  }
}
