import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FileUploadService } from './file-upload.service';

xdescribe('FileUploadService', () => {
  let service: FileUploadService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ FileUploadService ]
    });
    service = TestBed.inject(FileUploadService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // xit('should return results from 508 compliance testing', () => {
  //   // service.upload().subscribe(result => {
  //   //   console.log("result = ", result);
  //   //   expect(result).toBeTruthy();
  //   //   //expect(result['508_accessibility_compliant']).toBeTruthy();
  //   // });
  //   // const req = httpMock.expectOne(API_URL);
  //   // expect(req.request.method).toBe('POST');
  //   // req.flush({
  //   //   '508_accessibility_compliant': true
  //   // })
  //   // expect(service).toBeTruthy();

  //   // const dataTransfer = new DataTransfer()
  //   // dataTransfer.items.add(new File([''], 'test-file.pdf'))

  //   // const fixture = TestBed.createComponent(AppComponent);
  //   // const app = fixture.componentInstance;

  //   // const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
  //   // inputDebugEl.nativeElement.files = dataTransfer.files;

  //   // inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

  //   // fixture.detectChanges();

  //   // expect(component.uploadedFile).toBeTruthy()
  //   // expect(component.uploadedFile).toBe('test-file.pdf')

  // });
});
