import { Component, OnInit } from '@angular/core';
import facts from '../../assets/json/facts.json';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  facts: Object = facts;
  currentTopic: Object;

  constructor() { }

  ngOnInit() {
  }

  selectTopic(topic) {
    this.currentTopic = facts[topic];
  }

}
