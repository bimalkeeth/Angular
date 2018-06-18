import {Application, Request, Response} from 'express';
import {complexAssetData} from '../db-data';


export function GetComplexAssetRelatedData(app:Application)
{
  app.route('/api/issplitpossible').get((req: Request, res: Response) => {
   let json=complexAssetData;
   return res.status(200).json(json)

  });

}
