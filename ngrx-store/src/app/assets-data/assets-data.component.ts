import { Component, OnInit } from '@angular/core';
import {AssetsVM} from '../../../shared/vmmodel/assets.vm';
import {Observable} from 'rxjs/Observable';
import {ISplitResultMessage} from '../store/assetmodel/splitresultmessage.vm';
import {Store} from '@ngrx/store';
import {mapAssetsRelatedData} from '../datamappers/assetsplits/assetrelatedmapper';
import {LoadAssetSplitAction} from '../store/actions/actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'assets-data',
  templateUrl: './assets-data.component.html',
  styleUrls: ['./assets-data.component.css']
})
export class AssetsDataComponent implements OnInit {

  assets$:Observable<AssetsVM>
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private store:Store<ISplitResultMessage>,private _formBuilder: FormBuilder)
  {

    this.assets$=store.select(mapAssetsRelatedData);

  }

  ngOnInit()
  {
    this.store.dispatch(new LoadAssetSplitAction());

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
