import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {

  @Input() scroll:any;

  constructor(private el:ElementRef) {
      //'<h1 [scroll]="30"></h1>
      //<h1 <scroll]="30" appscroll></h1?
   }

   @HostListener("click") 
   onClick():void{
       
       let temp=this.el.nativeElement.parentNode;
       console.log(temp);
        temp=temp.children[3];
       temp.scrollTo({ left: (temp.scrollLeft + this.scroll), behavior: 'smooth' });
       
       console.log(temp);
       console.log();
   }
  

}
