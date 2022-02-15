import { Injectable } from '@angular/core';

import { Account } from '../core/Account';
import { AccountsList } from '../core/AccountsList';

@Injectable({ providedIn: 'root' })
export class AccountServices {

	myAccount: Account = new Account();
	accountList: AccountsList = new AccountsList();

	constructor(){
	}

	initAccounts () {

		this.myAccount.idAccount = 1;
		this.myAccount.accountnumber = "100000000000";
		this.myAccount.balance = 10000;
    this.myAccount.name = 'My Account';

    const account1: Account = new Account();
		account1.idAccount = 1;
		account1.accountnumber = "100000000001";
		account1.balance = 10000;
    account1.name = 'Account 1';

		const account2: Account = new Account();
		account2.idAccount = 1;
		account2.accountnumber = "100000000002";
		account2.balance = 10000;
    account2.name = 'Account 2';

		const account3: Account = new Account();
		account3.idAccount = 1;
		account3.accountnumber = "100000000003";
		account3.balance = 10000;
    account3.name = 'Account 3';

		const account4: Account = new Account();
		account4.idAccount = 1;
		account4.accountnumber = "100000000004";
		account4.balance = 10000;
    account4.name = 'Account 4';

		this.accountList.accounts.push(this.myAccount);

		this.accountList.accounts.push(account1);
		this.accountList.accounts.push(account2);
		this.accountList.accounts.push(account3);
		this.accountList.accounts.push(account4);

	}

	addToMyAccount(account: Account, money: string) {

    let acc = this.getAccountFromAccountnumber( account.accountnumber);

    if (acc.accountnumber === this.myAccount) {
      this.myAccount.balance = this.myAccount.balance + parseInt(money);
    }
    acc.balance = parseInt(acc.balance) + parseInt(money);
	}

	removeToMyAccount(account: Account, money: string) {

    let acc = this.getAccountFromAccountnumber( account.accountnumber);
    if (acc.accountnumber === this.myAccount) {
      this.myAccount.balance = this.myAccount.balance - parseInt(money);
    }
		acc.balance = parseInt(acc.balance) - parseInt(money);
	}

  getAccountFromAccountnumber( accountnumber: string) : any {
    for (let acc of this.accountList.accounts) {

      if (accountnumber === acc.accountnumber) {
        return acc;
      }
    }
  }

}
