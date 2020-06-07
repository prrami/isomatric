import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { MetalFalseCeilingsComponent } from './metal-false-ceilings/metal-false-ceilings.component';
import { MetalExteriorLouversComponent } from './metal-exterior-louvers/metal-exterior-louvers.component';
import { WoodenTextureComponent } from './wooden-texture/wooden-texture.component';
import { ProjectPhotosComponent } from './project-photos/project-photos.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DownloadComponent } from './download/download.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
const routes: Routes = [
  {path: 'Products', component: ProductsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Metal False Ceilings', component: MetalFalseCeilingsComponent},
  {path: 'Metal Exterior Louvers', component: MetalExteriorLouversComponent},
  {path: 'Wooden Texture', component: WoodenTextureComponent},
  {path: 'ProjectPhotos', component: ProjectPhotosComponent},
  {path: 'ProductDetail/:title', component: ProductDetailComponent},
  {path: 'Download', component: DownloadComponent},
  {path: 'ContactForm', component: ContactFormComponent},
  {path: 'ContactUs', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
