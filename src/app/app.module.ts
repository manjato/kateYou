
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/* SERVICES */

import { HomeService } from './services/home.service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { HeaderComponent } from './Component/header/header.component';
import 'hammerjs';
import { FooterComponent } from './Component/footer/footer.component';
import { LoginComponent } from './Component/login/login.component';
import { ResetComponent } from './Component/login/reset/reset.component';
import { ProfilComponent } from './Component/profil/profil.component';
import { VendeurprofilComponent } from './Component/Vendeurs/vendeurprofil/vendeurprofil.component';
import { DownloadComponent } from './Component/footer/download/download.component';
import { NewsletterComponent } from './Component/footer/newsletter/newsletter.component';
import { AboutusComponent } from './Component/footer/aboutus/aboutus.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TopbarComponent } from './Component/header/topbar/topbar.component';
import { DocumentComponent } from './Component/document/document.component';
import { MesproduitsComponent } from './Component/produit/mesproduits/mesproduits.component';
import { MespaiementComponent } from './Component/paiement/mespaiement/mespaiement.component';
import { Error404Component } from './Component/error404/error404.component';
import { DetailproduitComponent } from './Component/produit/detailproduit/detailproduit.component';
import { PanierComponent } from './Component/panier/panier.component';
import { NosVendeursComponent } from './Component/Vendeurs/nos-vendeurs/nos-vendeurs.component';
import { ParametreComponent } from './Component/profil/parametre/parametre.component';
import { AjoutProduitComponent } from './Component/produit/ajout-produit/ajout-produit.component';
import { RatingComponent } from './Component/rating/rating.component';
import { ListComponent } from './Component/list/list.component';
import { MesparametresComponent } from './Component/Vendeurs/mesparametres/mesparametres.component';
import { ProductsService } from './services/products.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MescommandesComponent } from './Component/Vendeurs/mescommandes/mescommandes.component';



/* AUTHENTICATION */
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('30987147581-iqk9bpv2kp8s4j140rhsf91kgm13h3mp.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1926480644329803')
  }
]);

/* Route */
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resetPass',
    component: ResetComponent
  },
  {
    path: 'profil-Vendeur',
    component: VendeurprofilComponent
  },
  {
    path: 'mon-profil',
    component: ProfilComponent
  },
  {
    path: 'mes-documents',
    component: DocumentComponent
  },
  {
    path: 'mon-paiement',
    component: MespaiementComponent
  },
  {
    path: 'mes-produits',
    component: MesproduitsComponent
  },
  {
    path: 'detail-produit',
    component: DetailproduitComponent
  },
  {
    path: 'mon-panier',
    component: PanierComponent
  },
  {
    path: 'nosVendeurs',
    component: NosVendeursComponent
  },
    {
    path: 'ajout-produit',
    component: AjoutProduitComponent
  },
  {
    path: 'etoil',
    component: ListComponent
  },
  {
    path: 'mes-parametres',
    component: MesparametresComponent
  },
  {
    path: 'mes-commandes',
    component: MescommandesComponent
  },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ResetComponent,
    ProfilComponent,
    VendeurprofilComponent,
    DownloadComponent,
    NewsletterComponent,
    AboutusComponent,
    TopbarComponent,
    DocumentComponent,
    MesproduitsComponent,
    MespaiementComponent,
    Error404Component,
    DetailproduitComponent,
    PanierComponent,
    NosVendeursComponent,
    ParametreComponent,
    AjoutProduitComponent,
    RatingComponent,
    ListComponent,
    MesparametresComponent,
    MescommandesComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SocialLoginModule.initialize(config),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AngularFontAwesomeModule,
    Ng2SearchPipeModule,
  ],
  providers: [HomeService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
