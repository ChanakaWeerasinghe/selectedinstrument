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
      key: "BILLPAYMENT_TYPE",
      value: "Wallet"
    },
    {
      key: "BILLPAYMENT_VALUE",
      value: "1002"
    },
    {
      key: "SENDMONEY_TYPE",
      value: "1002"
    },
    {
      key: "SENDMONEY_VALUE",
      value: "1002"
    },
    {
      key: "REQUESTMONEY_TYPE",
      value: "1002"
    },
    {
      key: "REQUESTMONEY_VALUE",
      value: "1002"
    },
    {
      key: "QUICKPAYMENT_TYPE",
      value: "1002"
    },
    {
      key: "QUICKPAYMENT_VALUE",
      value: "1002"
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
          BILLPAYMENT_VALUE,
          BILLPAYMENT_TYPE
        )
      );
    } else if ((fromSendPage = SENDMONEY)) {
      console.log(
        this.getKeyByValue(this.defaultList, SENDMONEY_TYPE, SENDMONEY_VALUE)
      );
    } else if ((fromSendPage = REQUESTMONEY)) {
      console.log(
        this.getKeyByValue(this.defaultList, REQUESTMONEY_TYPE, SENDMONEY_VALUE)
      );
    } else if ((fromSendPage = QUICKPAYMENT)) {
      console.log(
        this.getKeyByValue(
          this.defaultList,
          QUICKPAYMENT_TYPE,
          QUICKPAYMENT_VALUE
        )
      );
    }
  }

  getKeyByValue(object, value, vtype) {
    let tempData = [];
    for (var index = 0; index < object.length; index++) {
      console.log(object[index].key);
      if (object[index].key === value) {
        tempData.push(object[index]);
      } else if (object[index].key === vtype) {
        tempData.push(object[index]);
      }
    }
    return tempData;
  }
}
