import { Component, OnInit } from '@angular/core';
import { PartsService } from '../../services/parts.service';
import { Part } from '../../models/part.model';

@Component({
  selector: 'app-part-list',
  template: `
    <ul class="parts-container">
      <li *ngFor="let part of parts" class="part-card">
        <div>
          <img src="/assets/images/cpu.png"/>
          <label>
            <b>{{part.name}}</b>
          </label>
        </div>
        <div>
          <label>CPU: </label>{{part.cpu}}
        </div>
        <div>
          <label>Engine: </label>{{part.engine}}
        </div>
        <div>
          <label>Type: </label>{{part.type}}
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {
  parts: Part[];

  constructor(private partsService: PartsService) {
  }

  ngOnInit() {
    this.partsService.getParts().subscribe((data) => {
      this.parts = data;
    });
  }

}
