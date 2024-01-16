import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardsComponent } from './components/recipe-cards/recipe-cards.component';
import { GetDataService } from './services/get-data/get-data.service';
import { RecipeDataComponent } from './components/recipe-data/recipe-data.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagnationComponent } from './components/pagnation/pagnation.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardsComponent,
    RecipeDataComponent,
    FooterComponent,
    PagnationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
