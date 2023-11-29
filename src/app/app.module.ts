import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardsComponent } from './components/recipe-cards/recipe-cards.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { GetDataService } from './services/get-data/get-data.service';
import { RecipeDataComponent } from './components/recipe-data/recipe-data.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagnationComponent } from './components/pagnation/pagnation.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardsComponent,
    FilterListComponent,
    RecipeDataComponent,
    FooterComponent,
    PagnationComponent
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
