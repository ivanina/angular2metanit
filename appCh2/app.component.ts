import {Component, SimpleChanges} from '@angular/core';
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
    nameLocal:string = "Ghost in the shield";
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


    ngOnChanges(changes: SimpleChanges) {
        console.log("[p] - ngOnChanges");
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    private log(msg: string) {
        console.log("[p]"+msg);
    }

}