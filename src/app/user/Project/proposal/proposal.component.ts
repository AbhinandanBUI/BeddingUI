import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
})
export class ProposalComponent {
  itemId: any;
  projectDetail: any;

  constructor(private _activeRouter: ActivatedRoute) {
    this.getActiveProject();
  }

  ngOnInit(): void {
    this.itemId = this._activeRouter.snapshot.params['id'];
    this.getActiveProject();
  }
  getActiveProject() {


    this.projectDetail =
      {
        id: this.itemId,
        projectName: 'Dot net core Angular ',
        projectDescription:
          'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
        projectPrice: 100,
        currencyType: 'USD',
        projectDuration: 2,
        durationType: 'Month',
        skills: [
          { name: 'Angular' },
          { name: 'Dot net core' },
          { name: 'Api' },
          { name: 'Express' },
          { name: 'MongoDb' },

        ],
      }

    }
}
