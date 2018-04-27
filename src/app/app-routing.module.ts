import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HandComponent } from './components/hand/hand.component';

const routes: Routes = [
  {path: '', component: HandComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
