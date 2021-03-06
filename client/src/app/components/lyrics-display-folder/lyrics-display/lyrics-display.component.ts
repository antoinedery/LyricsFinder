import { Component, OnInit } from '@angular/core';
import { LyricsHandlerService } from '@app/services/lyrics-handler.service';
import { SongInformation } from 'src/app/classes/interfaces/song-information';
import { ClientSocketService } from 'src/app/services/client-socket.service';

@Component({
  selector: 'app-lyrics-display',
  templateUrl: './lyrics-display.component.html',
  styleUrls: ['./lyrics-display.component.css'],
})
export class LyricsDisplayComponent implements OnInit {
  songInformation: SongInformation = { songTitle: '', artist: '', lyrics: '' };
  isFound: boolean = true;

  constructor(
    private clientSocketService: ClientSocketService,
    public lyricsHandlerService: LyricsHandlerService
  ) {}

  ngOnInit(): void {
    this.clientSocketService.lyricsObservable.subscribe((value) => {
      this.lyricsHandlerService.isReceived = true;
      this.isFound = true;
      this.songInformation = value;
    });

    this.clientSocketService.notFoundLyricsObservable.subscribe(() => {
      this.lyricsHandlerService.isReceived = true;
      this.isFound = false;
    });
  }
}
