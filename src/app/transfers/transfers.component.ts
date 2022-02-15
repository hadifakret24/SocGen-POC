import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { TransfersService} from "../services/Transfers.services";
import { AccountServices} from "../services/Account.services";

import { AccountsList } from "../core/AccountsList";

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  form: FormGroup;
  accountsList: AccountsList;

  constructor(private fb: FormBuilder,
              private transfertService : TransfersService,
              private accountServices: AccountServices) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      emitter: [],
      receiver:new FormControl(),
      amount: new FormControl('',[Validators.required ])
    });
  }

  ngOnInit(): void {
    this.accountsList = this.accountServices.accountList;
  }

  get f() { return this.form.controls; }

  fundsTransfers() {

    console.log(' fundsTransfers');

    const accountEmit = this.accountServices.getAccountFromAccountnumber(this.f.emitter.value);
    const accountReceiv = this.accountServices.getAccountFromAccountnumber(this.f.receiver.value);

    this.transfertService.createAndAddNewTransfert('15/02/2022',accountEmit, accountReceiv, this.f.amount.value);

    console.log ('traitement');
    console.log(this.accountsList);
  }

}
