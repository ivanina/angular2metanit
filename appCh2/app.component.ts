import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    styles: [],
    styleUrls:['appCh2/app.component.css'],
    //template: `<h1>Hello Angular 2</h1>`,
    templateUrl:'appCh2/app.component.html'
})
export class AppComponent {
    name:string = "Tom";
    someName:string = "Ghost";
    age:number = 25;
    clicks:number = 0;
    addClick($event):void {
        this.clicks++;
        console.log($event);
    }
    unClick($event):void {
        if(this.clicks > 0) this.clicks--;
        console.log($event);
    }

    onChange(flag:boolean):void{
        if(flag){
            this.clicks++;
        }else {
            this.clicks--;
        }
        console.log("click in parent: "+this.clicks);
    }

}