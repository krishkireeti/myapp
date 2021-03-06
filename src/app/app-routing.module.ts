import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthComponent } from './fifth/fifth.component';
import { FirstComponent } from './firstComponent/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { SecondComponent } from './secondComponent/second.component';
import { ThirdComponent } from './thirdComponent/third.component';

const routes: Routes = [
  {path:"first",component:FirstComponent},
  {path:"meraj" , component:SecondComponent},
  {path:"kireeti" , component:ThirdComponent},
  {path:"fourth" , component:FourthComponent},
  {path:"fifth" , component:FifthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
