import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import { FileUploadResponse } from './file-upload';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

	file: File | null = null; // Variable to store file
	complianceResultText: string = "";
	acceptedFiles: string = ".pdf, .doc, .docx, .ppt, .html";
	fileUploadResponse!: FileUploadResponse;
	showResults: boolean = false;

	// Inject service
	constructor(private fileUploadService: FileUploadService) { }

	ngOnInit() {
	}

	handleUpload(event: any) {
		for (let file of event.files) {
			this.file = file;
		}
		this.onUpload();
	}

	onSelect(event: any) {
		this.showResults = false;
	}

	onClear(event: any) {
		this.showResults = false;
 	}
	
	onChange(event: any) {
   		this.file = event.target.files[0];
	}

	onUpload() {
		if (this.file) {
			const fileName = this.file?.name;
			if (this.validateFile(fileName)) {
				this.fileUploadService.upload(this.file).subscribe((response: FileUploadResponse) => {
					this.fileUploadResponse = response;
					this.showResults = true;
					this.complianceResultText = response["508_accessibility_compliant"] ? "Passed 508 Accessibility Compliance Test" : "Failed 508 Accessibility Compliance Test";
				});
			} else {
				alert ("Invalid file. Please upload either a PDF, DOC, PPT or a HTML");
			}

		  } else {
			alert("Please select a file first")
		  }
	}

	validateFile(name: String | undefined) {
		if (!name) {
			return false;
		}
		var ext = name.substring(name.lastIndexOf('.') + 1);

		if (ext.toLowerCase() === 'html' || 
			ext.toLowerCase() === 'pdf' || 
			ext.toLowerCase() === 'docx' || 
			ext.toLowerCase() === 'pptx') {
			return true;
		}
		else {
			return false;
		}
	}
}
