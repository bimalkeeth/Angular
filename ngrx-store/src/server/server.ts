

import * as express from 'express';
import {Application} from 'express';
import {GetComplexAssetRelatedData} from './api/apiGetComplexAssetData';
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

GetComplexAssetRelatedData(app);


app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
