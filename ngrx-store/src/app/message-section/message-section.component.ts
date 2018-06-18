import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import {ISplitResultMessage} from '../store/assetmodel/splitresultmessage.vm';

@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(private store:Store<ISplitResultMessage>)
  {
    store.subscribe(state=> console.log("Message Received state",state))
  }

  ngOnInit() {
  }

}
