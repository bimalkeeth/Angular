import {AssetsVM} from '../../../../shared/vmmodel/assets.vm';
export function mapAssetsRelatedData(store:any):AssetsVM
{
  if(!store.AssetSplit) return;
  let assetdata= store.AssetSplit.Asset
  if(assetdata)
  {
    return  { Id:assetdata.Id,
      ComplexAssetId:assetdata.ComplexAssetId,
      ComplexAssetName:assetdata.ComplexAssetName,
      LastModified:assetdata.LastModified,
      ComplexAssetCategory:assetdata.ComplexAssetCategory,
      ComplexAssetCategoryLabel:assetdata.ComplexAssetCategoryLabel}

  }
}
