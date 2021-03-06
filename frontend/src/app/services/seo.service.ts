import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  network = '';

  constructor(
    private titleService: Title,
    private stateService: StateService,
  ) {
    this.stateService.networkChanged$.subscribe((network) => this.network = network);
  }

  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle + ' - ' + this.getTitle());
  }

  resetTitle(): void {
    this.titleService.setTitle(this.getTitle());
  }

  getTitle(): string {
    return 'mempool - ' + (this.network ? this.ucfirst(this.network) : 'Bitcoin') + ' Explorer';
  }

  ucfirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
