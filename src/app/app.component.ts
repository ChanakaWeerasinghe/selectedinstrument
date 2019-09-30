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
      id: 1,
      key: "REQUESTMONEY",
      value: "Wallet_1002"
    },
    {
      id: 2,
      key: "SENDMONEY",
      value: "Wallet_1002"
    },
    {
      id: 3,
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
      this.seachInstrument(this.defaultList, BILLPAYMENT).then(data =>
        this.getTypeAndInstrument(data[0].value)
      );
    } else if ((fromSendPage = SENDMONEY)) {
    } else if ((fromSendPage = REQUESTMONEY)) {
    } else if ((fromSendPage = QUICKPAYMENT)) {
    }
  }

  seachInstrument(object, value): any {
    return new Promise((resolve, reject) => {
      let tempData = [];
      if (!object) {
        reject(tempData);
      }
      for (var index = 0; index < object.length; index++) {
        if (object[index].key === value) {
          tempData.push(object[index]);
        }
      }
      resolve(tempData);
    });
  }

  getTypeAndInstrument(input) {
    var fields = input.split("_");
    var selectedType = fields[0];
    var instrumentID = fields[1];
    console.log('instrumentID',instrumentID,'SelectedType',selectedType);
  }
}
