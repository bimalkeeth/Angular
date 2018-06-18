import {Actions, Effect} from '@ngrx/effects';
import {AssetSplitService} from '../../services/assetsplit.service';
import {LOAD_ASSET_SPLIT_VALIDATION} from '../actions/action-constant';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AssetSplitLoadAction} from '../actions/actions';
import {Injectable} from '@angular/core';

@Injectable()
export class AssetSplitEffectService{

  constructor(private action$:Actions,private splitservice:AssetSplitService){}

  @Effect() assetsData$:Observable<Action>=this.action$.ofType(LOAD_ASSET_SPLIT_VALIDATION)
    .switchMap(()=>this.splitservice.loadComplexAssetSplitData())
    .map(allUserData=>new AssetSplitLoadAction(allUserData));
}
