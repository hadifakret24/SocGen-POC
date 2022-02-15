import { Component, OnInit } from '@angular/core';

import { TransfersService } from "../services/Transfers.services";
import { Transfert } from "../core/Transfert";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  transfers: Transfert[];
  constructor(private transfersService: TransfersService) { }

  ngOnInit(): void {

    this.transfers = this.transfersService.getTransferList();

  }


}
