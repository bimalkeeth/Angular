import {IComplexAsset, INITIAL_COMPLEX__SPLIT_STATE} from './complexasset_initial.vm';
export interface ISplitResultMessage
{
  Success:boolean;
  Reason:string;
  WorkOrderAttachments:string
  ComponentNetWorkTypeIncomplete:string;
  Asset:IComplexAsset
}
export const INITIAL_MESSAGE_STATE:ISplitResultMessage={

  Success:true,
  Reason:'',
  WorkOrderAttachments:'',
  ComponentNetWorkTypeIncomplete:'',
  Asset:INITIAL_COMPLEX__SPLIT_STATE

}
