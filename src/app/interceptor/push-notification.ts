import { TokenservService } from './../token/tokenserv.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TokenServiceService } from '../service/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class PushNotification implements HttpInterceptor {

  constructor(
    private tokenserv: TokenServiceService,
    private injecter: Injector,
    private pushtokenserv: TokenservService
  ) { }
  intercept(req, next) {
    const tokenreq = req.clone({
      setHeaders: {
        authorization: 'key=AAAAGJ__tb4:APA91bGU_vqhF1ZEWynJQXmIFVZ1niLCjhygDtsnlzFX4Clk0WjhCbt2Pf3REhv1kf2r7O_cIlD-AycvcOA8BCe4BWo1oZz3Izef63OfeY885bdL9y8J7-XtWbWhE_0UMDzs2ndObTH3'
      }
    });
    return next.handle(tokenreq);
  }
}
