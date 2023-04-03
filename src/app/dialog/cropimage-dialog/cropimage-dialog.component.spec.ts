import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropimageDialogComponent } from './cropimage-dialog.component';

describe('CropimageDialogComponent', () => {
  let component: CropimageDialogComponent;
  let fixture: ComponentFixture<CropimageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropimageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropimageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
