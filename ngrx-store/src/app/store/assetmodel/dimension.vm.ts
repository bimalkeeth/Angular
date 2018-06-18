import {DimensionRecordType} from '../../../../shared/Enums/DimensionRecordType';
export interface IDimension
{
  NetworkMeasureTypeId:number;
  NetworkMeasureType:string;
  ComponentId:string;
  UnitId:number;
  UnitName:string
  ShapeId:string;
  ShapeName:string;
  DimensionId:string;
  Measure:number;
  RecordType:DimensionRecordType;
  Multiplier:number;
  Comment:string;

}
export const INITIAL_DIAMENSION_STATE:IDimension={

  NetworkMeasureTypeId:undefined,
  NetworkMeasureType:'',
  ComponentId:undefined ,
  UnitId:undefined,
  UnitName:'',
  ShapeId:undefined,
  ShapeName:'',
  DimensionId:undefined,
  Measure:0,
  RecordType:undefined,
  Multiplier:0,
  Comment:'',

}
