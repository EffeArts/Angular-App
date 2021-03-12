import { ChatComponent } from './chat/chat.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { FilesComponent } from './files/files.component';
import { FeaturesComponent } from './features/features.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FindProjectComponent } from './find-project/find-project.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        redirectTo: '',
        component: DashboardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'find-project',
        component: FindProjectComponent
      },
      {
        path: 'create-project',
        component: CreateProjectComponent
      },
      {
        path: 'my-projects',
        component: MyProjectsComponent
      },
      {
        path: 'features',
        component: FeaturesComponent
      },
      {
        path: 'files',
        component: FilesComponent
      },
      {
        path: 'project-view',
        component: ProjectViewComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
