import {Action} from '@ngrx/store';
import {ASSET_SPLIT_VALIDATION_LOADED,LOAD_ASSET_SPLIT_VALIDATION}from './action-constant';
import {ISplitResultMessage} from '../assetmodel/splitresultmessage.vm';

export class AssetSplitLoadAction implements Action
{
 readonly type: string=ASSET_SPLIT_VALIDATION_LOADED;
 constructor(public playload?:ISplitResultMessage){}

}
export class LoadAssetSplitAction implements Action{

  readonly type: string=LOAD_ASSET_SPLIT_VALIDATION;

}
