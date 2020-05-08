import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { MetalFalseCeilingsComponent } from './metal-false-ceilings/metal-false-ceilings.component';
import { MetalExteriorLouversComponent } from './metal-exterior-louvers/metal-exterior-louvers.component';
import { WoodenTextureComponent } from './wooden-texture/wooden-texture.component';
import { ProjectPhotosComponent } from './project-photos/project-photos.component';
const routes: Routes = [
  {path: 'Products', component: ProductsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'MetalFalseCeilings', component: MetalFalseCeilingsComponent},
  {path: 'MetalExteriorLouvers', component: MetalExteriorLouversComponent},
  {path: 'WoodenTexture', component: WoodenTextureComponent},
  {path: 'ProjectPhotos', component: ProjectPhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
