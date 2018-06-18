import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitOneAssetComponent } from './split-one-asset.component';

describe('SplitOneAssetComponent', () => {
  let component: SplitOneAssetComponent;
  let fixture: ComponentFixture<SplitOneAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitOneAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitOneAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
