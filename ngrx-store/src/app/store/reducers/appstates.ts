
import {ActionReducerMap} from '@ngrx/store';
import {ISplitResultMessage} from '../assetmodel/splitresultmessage.vm';
import {AssetSplitReducer} from './asset-split-reducers';

export interface  AppState{AssetSplit:ISplitResultMessage }
export const reducers:ActionReducerMap<AppState>={AssetSplit:AssetSplitReducer }
