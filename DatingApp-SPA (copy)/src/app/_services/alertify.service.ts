import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }


confirm(message: string, okCallback: () => any) {
  alertify.confirm(message, (e: any) => {
if (e) {
  okCallback();
} else {}
});
}

error(messsage: string) {
  alertify.error(messsage);
}

success(messsage: string) {
  alertify.success(messsage);
}

warning(messsage: string) {
  alertify.warning(messsage);
}

message(messsage: string) {
  alertify.message(messsage);
}

}
