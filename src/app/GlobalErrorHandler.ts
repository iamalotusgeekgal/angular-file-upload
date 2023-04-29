import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { LocationStrategy } from "@angular/common";

// The GlobalErrorHandler is ready to get injected, so we can use it in dependency injection, 
// so the app.module.ts does not throw any error
@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

    constructor(private httpClient: HttpClient, 
        private locationStrategy: LocationStrategy)
        {
        super()
    }

    // override the method from ErrorHandler
    // after posting to the http service, we need
    // to subscribe to it as httpClient.post is 
    // Observerable 
    override handleError(error: any): void {
        var errorEvent = {
            path: this.locationStrategy.path(), //shows where the error has occured
            message: error.message?? error.toString(),
            handler: 'GlobalErrorHandler', // who handled the error
            user: 'the-id-of-the-current-user', //if there was a logging system, we wil have user id here
            time: new Date(),
            stack: error.stack // stack trace - line of code that threw the error
        }

        // we can either send a request to our web service for saving them
        // this.httpClient.post("http://localhost:3003/errors/log", 
        //     errorEvent).subscribe((response) => {console.log(response)})
        console.log("Error occured: ", errorEvent);
    }
}