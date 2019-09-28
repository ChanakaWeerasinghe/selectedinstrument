import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

   defaultList = [
            {
                key: "BILLPAYMENT_TYPE",
                value: "Wallet"
            }, {
                key: "BILLPAYMENT_VALUE",
                value: "1002"
            }, {
                key: "SENDMONEY_TYPE",
                value: "1002"
            }, {
                key: "SENDMONEY_VALUE",
                value: "1002"
            }, {
                key: "REQUESTMONEY_TYPE",
                value: "1002"
            }, {
                key: "REQUESTMONEY_VALUE",
                value: "1002"
            }, {
                key: "QUICKPAYMENT_TYPE",
                value: "1002"
            }, {
                key: "QUICKPAYMENT_VALUE",
                value: "1002"
            }
        ];

constructor(){

selectedType()
{

  
}
}



}
