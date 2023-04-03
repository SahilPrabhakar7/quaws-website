import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { base64ToFile, Dimensions, ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
import { FileFormat } from 'src/app/app.config';

@Component({
  selector: 'app-cropimage-dialog',
  templateUrl: './cropimage-dialog.component.html',
  styleUrls: ['./cropimage-dialog.component.scss']
})
export class CropimageDialogComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper: boolean;
  containWithinAspectRatio: boolean;
  transform: ImageTransform = {};
  imageFormat: string

  constructor(
    private dialogRef: MatDialogRef<CropimageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ngZone: NgZone
    // private imageCompress: NgxImageCompressService
  ) {
    console.log(data)
    this.showCropper = false,
    this.imageChangedEvent = data.event;
    this.containWithinAspectRatio = this.notNull(data.aspect_ratio)
    this.imageFormat = FileFormat.image
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    // console.log(event, base64ToFile(event.base64));
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }



  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }

  async submit() {
    // const res = await this.compressFile(this.croppedImage)
    try{
      this.ngZone.run(() => {
        this.dialogRef.close({ cropped:this.croppedImage})// base64ToFile( + ""), compressed: base64ToFile(this.croppedImage) })
      })
    }
    catch(e){
      console.log(e)
    }
  }
  notNull(val: any) {
    return (val !== null && !Number.isNaN(val) && val !== undefined && val !== "NULL" && val !== "null" && val !== "undefined" && val !== "UNDEFINED" && val !== 'NaN' && (val + "").trim() !== "")
  }
}
