class Form {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.button = createButton('Join');
    this.name = createElement('h1');
  
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
  }
    
  display(){
    this.title.html("Ready, Set, Scavenge");
    this.title.position(350, 0);

    this.name.html("Enter Name" );
    this.name.position(400, 60);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.name.hide();
      contestant.name = this.input1.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
  });
}
}

