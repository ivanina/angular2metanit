import {Component, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
@Component({
    selector: 'child-comp',
    //template: ``,
    templateUrl:'appCh2/child.component.html',
    styles: [`h2, p {color:darkred;}`]
})
export class ChildComponent {
    name:string = "John";
    childClicks:number = 0;


    @Input() userName:string;
    _userAge: number;

    @Input() set userAge(age:number){
        if(age < 0){
            this._userAge = 0;
        }else {
            this._userAge = age;
        }
    };

    get userAge(){
        return this._userAge;
    }

    @Output() onChange = new EventEmitter<boolean>();
    change(flag:boolean){
        if(flag){
            this.childClicks++;
        }else {
            this.childClicks--;
        }
        console.log("click in child: "+this.childClicks);
        this.onChange.emit(flag);
    }


    @Input() someUserName:string;
    @Output() someUserNameChange = new EventEmitter<string>();
    onChangeName(name:string):void {
        this.someUserName = name;
        this.someUserNameChange.emit(name);
    }



    ngOnChanges(changes: SimpleChanges) {
        console.log("[ch] - ngOnChanges");
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    private log(msg: string) {
        console.log("[ch]"+msg);
    }

}