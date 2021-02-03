import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  let service: CharactersService;
  let httpTestingController: HttpTestingController;
  const data: any ={
    comics: {available: 30},
    series: {available: 50}
  }
  const dataArr: any[] = [data];
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ],
  });
  service = TestBed.get(CharactersService);
  httpTestingController = TestBed.get(HttpTestingController);
});

  afterEach(() => {
    httpTestingController.verify();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch characters', () => {
    const params = {}
    service.getCharacters(params)
      .subscribe((data: any[]) => {
        expect(data).toEqual(dataArr);
        expect(data.length).toBe(1);
      });

    const req = httpTestingController.expectOne(service.url+'?ts='+ service.getTimeStamp()+'&apikey='+service.publicKey+'&hash='+service.getHash(service.getTimeStamp()));
    expect(req.request.method).toBe('GET');
    req.flush(dataArr);
  });


});

