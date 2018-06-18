import {AssetSplitLoadAction} from '../actions/actions';
import {ISplitResultMessage} from '../assetmodel/splitresultmessage.vm';

export function handledLoadAssetSplitAction(state:ISplitResultMessage,action:AssetSplitLoadAction ):ISplitResultMessage
{
  let newState:ISplitResultMessage=Object.assign({},state);
  if(action.playload)
  {
    let data=action.playload;
    newState.ComponentNetWorkTypeIncomplete=data.ComponentNetWorkTypeIncomplete;
    newState.Reason=data.Reason;
    newState.Success=data.Success;
    newState.WorkOrderAttachments=data.WorkOrderAttachments;
    newState.Asset=data.Asset;
  }
  return newState
}
