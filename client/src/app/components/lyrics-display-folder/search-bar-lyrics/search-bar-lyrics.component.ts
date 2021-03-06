import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LyricsHandlerService } from '@app/services/lyrics-handler.service';

@Component({
  selector: 'app-search-bar-lyrics',
  templateUrl: './search-bar-lyrics.component.html',
  styleUrls: ['./search-bar-lyrics.component.css'],
})
export class SearchBarLyricsComponent {
  @ViewChild('inputBox') inputBox!: ElementRef;
  songTitle: string = '';
  constructor(
    private router: Router,
    private lyricsHandlerService: LyricsHandlerService
  ) {}

  ngOnInit(): void {
    this.songTitle = this.lyricsHandlerService.researchTitle;
    if (this.inputBox) this.inputBox.nativeElement.value = this.songTitle;
  }

  generateLyrics(): void {
    if (this.inputBox.nativeElement.value.length === 0) return;
    this.lyricsHandlerService.getLyrics(this.songTitle);
    this.lyricsHandlerService.isReceived = false;
    this.router.navigate(['/search', this.songTitle]);
  }
}
