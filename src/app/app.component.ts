import { Component } from "@angular/core";

const BILLPAYMENT = "BILLPAYMENT";
const SENDMONEY = "SENDMONEY";
const REQUESTMONEY = "REQUESTMONEY";
const QUICKPAYMENT = "QUICKPAYMENT";

const SENDMONEY_TYPE = "SENDMONEY_TYPE";
const SENDMONEY_VALUE = "SENDMONEY_VALUE";
const REQUESTMONEY_TYPE = "REQUESTMONEY_TYPE";
const REQUESTMONEY_VALUE = "REQUESTMONEY_VALUE";

const BILLPAYMENT_TYPE = "BILLPAYMENT_TYPE";
const BILLPAYMENT_VALUE = "BILLPAYMENT_VALUE";
const QUICKPAYMENT_TYPE = "QUICKPAYMENT_TYPE";
const QUICKPAYMENT_VALUE = "QUICKPAYMENT_VALUE";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  defaultList = [
    {
       id: 0,
      key: "BILLPAYMENT",
      value: "Wallet_1002"
    },
    {
       id: 0,
      key: "REQUESTMONEY",
      value: "Wallet_1002"
    },
    {
       id: 0,
      key: "SENDMONEY",
      value: "Wallet_1002"
    },
    {
       id: 0,
      key: "QUICKPAYMENT",
      value: "Wallet_1002"
    }
  ];

  constructor() {
    this.getSelectedInstrument("BILLPAYMENT");
  }

  selectedType() {}

  getSelectedInstrument(fromSendPage: any) {
    let array = [];
    if ((fromSendPage = BILLPAYMENT)) {
      console.log(
        this.getKeyByValue(
          this.defaultList,
          BILLPAYMENT_VALUE
        )
      );
    } else if ((fromSendPage = SENDMONEY)) {
      console.log(
        this.getKeyByValue(this.defaultList, SENDMONEY_TYPE)
      );
    } else if ((fromSendPage = REQUESTMONEY)) {
      console.log(
        this.getKeyByValue(this.defaultList, REQUESTMONEY_TYPE)
      );
    } else if ((fromSendPage = QUICKPAYMENT)) {
      console.log(
        this.getKeyByValue(
          this.defaultList,
          QUICKPAYMENT_TYPE
    
        )
      );
    }
  }

  getKeyByValue(object, value) {
    console.log(object[index].key);
    let tempData = [];
    for (var index = 0; index < object.length; index++) {
      console.log(object[index].key);
      if (object[index].key === value) {
        tempData.push(object[index]);
        // setupPaymentType()
      } 
    }
    return tempData;
  }

  setupPaymentType(){


  }
}
