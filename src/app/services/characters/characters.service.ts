import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public url: string = "http://gateway.marvel.com/v1/public/characters";
  public publicKey: string = "1378b2950224924e5364f1d3611ce52d";
  private privateKey: string = "79db9e21db342f9aeeecf6b8d032f0493f3d46f6";


  constructor(private http: HttpClient) { }

  getHash(timeStamp: string): string {
    let hashGenerator: Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(this.privateKey);
    hashGenerator.appendStr(this.publicKey);
    let hash: string = hashGenerator.end().toString();
    return hash;
  }

  getTimeStamp(): string {
    return new Date().valueOf().toString();
  }


  /**
   * Get all crt configs
   */
  public getCharacters(data): Observable<any> {
    const timeStamp = this.getTimeStamp();
    const params = {...data, ts: timeStamp, apikey: this.publicKey, hash: this.getHash(timeStamp) }
    return this.http.get<any>(this.url, {params});
  }

}
