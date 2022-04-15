import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scrollback]'
})
export class ScrollBackDirective {

  @Input() scrollback:any;
  constructor(private el:ElementRef) {
      //'<h1 [scroll]="30"></h1>
   }

   @HostListener("click") 
   onClick():void{
       
       let temp=this.el.nativeElement.parentNode;
       console.log(temp);
        temp=temp.children[3];
       temp.scrollTo({ left: (temp.scrollLeft - this.scrollback), behavior: 'smooth' });
       
       console.log(temp);
       console.log();
   }
  


}
