import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './pages/app/app.component';
import { HomeSearchBarComponent } from './components/home-search-bar/home-search-bar.component';
import { LyricsDisplayComponent } from './components/lyrics-display/lyrics-display.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, HomeSearchBarComponent, LyricsDisplayComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
