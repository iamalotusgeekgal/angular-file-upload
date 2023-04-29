import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { API_URL } from '../../constants/main';

@Injectable({
providedIn: 'root'
})
export class FileUploadService {
	constructor(private http:HttpClient) { }

	// Returns an observable
	upload(file: any):Observable<any> {
		// Create form data
		const formData = new FormData();
			
		// Store form name as "file" with file data
		formData.append("file", file, file.name);
		
		// Make http post request over api
		// with formData as req
		return this.http.post(`${API_URL}accessibility/upload-validate`, formData);
	}
}
