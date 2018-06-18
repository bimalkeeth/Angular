import {Injectable} from '@angular/core';
import {ISplitResultMessage} from '../store/assetmodel/splitresultmessage.vm';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AssetSplitService {


  constructor(private httpClient:HttpClient){}
  loadComplexAssetSplitData(): Observable<ISplitResultMessage>
  {
     return this.httpClient.get<ISplitResultMessage>('/api/issplitpossible')
  }

}
