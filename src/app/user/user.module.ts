import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FindProjectComponent } from './find-project/find-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ChatComponent } from './chat/chat.component';
import { FeaturesComponent } from './features/features.component';
import { FilesComponent } from './files/files.component';
import { ProjectViewComponent } from './project-view/project-view.component';


@NgModule({
  declarations: [UserComponent, HeaderComponent, SidebarComponent, DashboardComponent, ProfileComponent, FindProjectComponent, CreateProjectComponent, MyProjectsComponent, ChatComponent, FeaturesComponent, FilesComponent, ProjectViewComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
