import { Injectable } from '@angular/core';

import { Transfert } from '../core/Transfert';
import { Account } from '../core/Account';

import { AccountServices} from './Account.services';


@Injectable({ providedIn: 'root' })
export class TransfersService {

	public transferList: Transfert[] = [];

	constructor(private accountServices: AccountServices){}

	getTransferList() {

		return this.transferList;

	}

	createAndAddNewTransfert(date: string, accountTransmitter: Account, accountReceiver: Account, amount: string) {

		let transfert = new Transfert();
		transfert.accountTransmitter = accountTransmitter;
		transfert.accountReceiver = accountReceiver;
		transfert.date = date;
		transfert.amount = amount;

    this.accountServices.addToMyAccount(accountTransmitter, amount);
    this.accountServices.removeToMyAccount(accountReceiver, amount);

    transfert.myBalance = this.accountServices.myAccount.balance;


		this.transferList.push(transfert);

	}

}

