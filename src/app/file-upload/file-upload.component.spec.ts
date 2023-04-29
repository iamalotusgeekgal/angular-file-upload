import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';
import { By } from '@angular/platform-browser';
import { DividerModule } from 'primeng/divider';
import { FileUploadService } from './file-upload.service';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadComponent ],
      imports: [DividerModule, FileUploadService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test upload file', () => {
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'test-file.pdf'))

    const fixture = TestBed.createComponent(FileUploadComponent);
    
    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

    fixture.detectChanges();

    expect(component.file).toBeTruthy()
    expect(component.file?.name).toBe('test-file.pdf')
  })
});
