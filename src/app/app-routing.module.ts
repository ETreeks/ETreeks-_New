import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { TrainerModule } from './trainer/trainer.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { authorizationGuard } from './authorization.guard';

const routes: Routes = [

  { path: 'admin', 
    loadChildren:()=>AdminModule 
     ,canActivate:[authorizationGuard]
  },


  { path: 'trainer', 
    loadChildren:()=>TrainerModule
     , canActivate:[authorizationGuard]
  }
  ,
  { path: 'student', 
    loadChildren:()=>StudentModule
     ,canActivate:[authorizationGuard]
  },
  { path: 'auth', 
    loadChildren:()=>AuthModule

  },
  { path: '', 
    loadChildren:()=>HomeModule

  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
