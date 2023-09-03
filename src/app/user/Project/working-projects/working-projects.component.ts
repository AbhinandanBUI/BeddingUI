import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-working-projects',
  templateUrl: './working-projects.component.html',
  styleUrls: ['./working-projects.component.scss']
})
export class WorkingProjectsComponent {

// Assuming you have an array of items fetched from a service
items: any[] = mydataList; // Replace this with your actual data

// Pagination settings
pageSize: number = 3;
currentPage: number = 1;

constructor(private _router:Router) {}

ngOnInit(): void {
  // Fetch your real data here and assign it to the "items" array
  // For this example, we'll use dummy data
  this.items = Array.from({ length: this.items.length }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));
  this.items = mydataList;
}
get itemsToShow() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  console.log('itemList::', this.items);
  return this.items.slice(startIndex, endIndex);
}

get pages() {
  return Array.from(
    { length: Math.ceil(this.items.length / this.pageSize) },
    (_, index) => index + 1
  );
}

goToPage(page: number) {
  if (page >= 1 && page <= this.pages.length) {
    this.currentPage = page;
  }
}

biddnow(item:any){
  let id = item.id;
  this._router.navigateByUrl('/user/project/bidnow/'+id);
}

}

export const mydataList = [
{
  id: 12323,
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
},
{
  id: 2322,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'INR',
  projectDuration: 2,
  durationType: 'Month',
},
{
  id: 343242,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'USD',
  projectDuration: 2,
  durationType: 'Month',
},
{
  id: 42342,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'USD',
  projectDuration: 2,
  durationType: 'Month',
},
{
  id: 54242,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'INR',
  projectDuration: 2,
  durationType: 'Month',
},
{
  id: 642342,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'USD',
  projectDuration: 2,
  durationType: 'Month',
  skills: [{ name: 1 }],
},
{
  id: 74234,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'USD',
  projectDuration: 2,
  durationType: 'Month',
},
{
  id: 823423,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'USD',
  projectDuration: 2,
  durationType: 'Month',
},
{
  id: 923423,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'lorem1000 kdsn ndsndos dskdn dksn jojdknnds  jnsdfnsdonfofoe sdndsndsnkldsnkl  dkdsl sdklnsdlfnlks dkls lkdsdskl lklkds kldslkdskld',
  projectPrice: 100,
  currencyType: 'USD',
  projectDuration: 2,
  durationType: 'Month',
},
{
  id: 10423423,
  projectName: 'Hello this is project 2 ',
  projectDescription:
    'I am looking for an experienced MERN stack developer to update the email functionality in my Auth0 implementation. This role will be focused on fixing an issue that is changing their email addresses within our React/Node application  The ideal candidate will have:  3+ years experience with the MERN stack (MongoDB, Express, React, Node.js)   Strong understanding of implementing authentication using Auth0 with a React front-end   Experience updating Auth0 rules and hooks to modify user metadata like email   Ability to quickly diagnose issues with Auth0 authentication flow   Knowledge of React hooks, context, and components for integrating Auth0   Familiarity with MongoDB schemas and MongoDB/Mongoose interaction' +
    ' Strong troubleshooting skills for identifying and resolving Auth0 integration bugs Excellent verbal and written communication skills   In this role, you will:   Audit our Auth0 implementation and identity the current email update issue' +
    ' Update Auth0 rules and hooks to allow for email address changes' +
    'Modify React components and context to integrate updated Auth0 hooks' +
    'Test and debug the new email update functionality' +
    'Clearly document all changes to the codebase and Auth0 configuration' +
    'Collaborate with internal engineering teams to deploy changes' +
    'This is an urgent role to fix a high-priority issue with our authentication system. Please reach out if you have experience with MERN stack and Auth0 integration at scale.',
  projectPrice: 100,
  currencyType: 'USD',
  projectDuration: 2,
  durationType: 'Month',
},
];
