
import {Action} from '@ngrx/store';
import {ASSET_SPLIT_VALIDATION_LOADED} from '../actions/action-constant';
import {INITIAL_MESSAGE_STATE, ISplitResultMessage} from '../assetmodel/splitresultmessage.vm';
import {handledLoadAssetSplitAction} from './recuce-asset-action-handler';

export function AssetSplitReducer(state:ISplitResultMessage,action:Action):ISplitResultMessage
{
   switch(action.type)
   {
     case  ASSET_SPLIT_VALIDATION_LOADED: return handledLoadAssetSplitAction(state=INITIAL_MESSAGE_STATE,action)
     default:
       return state
   }


}
