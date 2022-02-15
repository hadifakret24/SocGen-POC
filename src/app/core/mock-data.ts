import { Account } from './Account';
import { AccountsList } from './AccountsList';

const myAccount: Account = new Account();
myAccount.idAccount = 1;
myAccount.accountnumber = "100000000000";
myAccount.balance = 10000;


const account1: Account = new Account();
account1.idAccount = 1;
account1.accountnumber = "100000000001";
account1.balance = 10000;

const account2: Account = new Account();
account2.idAccount = 1;
account2.accountnumber = "100000000002";
account2.balance = 10000;

const account3: Account = new Account();
account3.idAccount = 1;
account3.accountnumber = "100000000003";
account1.balance = 10000;

const account4: Account = new Account();
account4.idAccount = 1;
account4.accountnumber = "100000000004";
account4.balance = 10000;

const accountList: AccountsList = new AccountsList();

accountList.accounts.push(myAccount);

accountList.accounts.push(account1);
accountList.accounts.push(account2);
accountList.accounts.push(account3);
accountList.accounts.push(account4);


