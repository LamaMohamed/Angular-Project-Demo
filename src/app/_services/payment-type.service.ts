
import {PaymentType} from "../_m/payment-type";

export class PaymentTypeService {
 paymentTypes: PaymentType[]=[
   {id:1, name:"Direct BankTransfare"},
   {id:2,name:"Cheque Payment"},
   {id:3,name:"Paypal"},
   {id:4,name:'Visa'},
   {id:5,name:"Mastercard"},
   {id:6, name:"COD"},
 ];

 getAllPayments(): PaymentType[]{
   return this.paymentTypes.slice();
 }
  constructor() { }
}
