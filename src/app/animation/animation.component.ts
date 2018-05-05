import { Component, OnInit, state, trigger, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger("myAnimation", [
      state("normal", style({
        transform: "translateX(0px)",
        "border-radius": "0px",
        "background": "purple"
      })),
      state("animate", style({
        // transform: "translateX(200px)",
        "border-radius": "100px",
        "background": "blue"

      })),
      transition("normal=>animate", animate(1000, keyframes([
        style({
          transform:"translateX(0px)",
          opacity: 1,
          offset: 0
        }),
        style({
          transform:"translateX(50px)",
          opacity: 1,
          offset: 0.3
        }),
        style({
          transform:"translateX(100px)",
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          transform:"translateX(2000px)",
          opacity: 0,
          offset: 1
        })
      ]))),
      transition("animate=>normal", animate(300)),

    ])
  ]
})
export class AnimationComponent implements OnInit {

  state = "normal";

  constructor() { }

  animateBlock(){
    if(this.state === "animate"){
      this.state = "normal"
    }else {
      this.state = "animate";
    }
  }
  ngOnInit() {
    this.state = "animate";
  }

}
