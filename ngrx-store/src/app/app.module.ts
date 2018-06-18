import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers/appstates';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {AssetSplitEffectService} from './store/effects/asset-split-effect.service';
import {AssetSplitService} from './services/assetsplit.service';
import { AssetsDataComponent } from './assets-data/assets-data.component';
import {DemoMaterialModule} from './app.material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SplitOneAssetComponent } from './split-one-asset/split-one-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsDataComponent,
    SplitOneAssetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AssetSplitEffectService])
  ],
  providers: [AssetSplitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
