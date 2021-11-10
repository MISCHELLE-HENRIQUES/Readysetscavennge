class Question{

    constructor(){
        this.question1 = createElement('h3');
    this.question2 = createElement('h3');
    this.question3 = createElement('h3');
    this.question4 = createElement('h3');
    this.question5 = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.option5 = createElement('h4');
    this.option6 = createElement('h4');
    this.option7 = createElement('h4');
    this.option8 = createElement('h4');
    this.option9 = createElement('h4');
    this.option10 = createElement('h4');
    this.option11 = createElement('h4');
    this.option12 = createElement('h4');
    this.option13 = createElement('h4');
    this.option14 = createElement('h4');
    this.option15 = createElement('h4');
    this.option16 = createElement('h4');
    this.option17 = createElement('h4');
    this.option18 = createElement('h4');
    this.option19 = createElement('h4');
    this.option20 = createElement('h4');
    this.input2 = createInput("Enter Answer Here.");
    }

display(){
    
    this.question1.html("1. What has a face and two hands but no arms or legs?");
    this.question1.position(150, 80);
    this.option1.html("a. Monitor");
    this.option1.position(150, 150);
    this.option2.html("b. Clock");
    this.option2.position(150, 170);
    this.option3.html("c. Table");
    this.option3.position(150, 190);
    this.option4.html("d. Bottle");
    this.option4.position(150, 210);
    this.input2.position(150,300);

    

    this.question2.html("2. What has a Thumb and Four fingers but is not alive?");
    this.option5.html("Hand");
    this.option6.html("Chair");
    this.option7.html("Glove");
    this.option8.html("Clock");

    this.question3.html("3. What has to be broken before you can use it?");
    this.option9.html("Egg");
    this.option10.html("")
    this.option11.html("Coconut")
    this.option12.html("")


    this.question4.html("4. Everyone has it and no one can lose it,what is it?");
    this.option13.html("Name");
    this.option14.html("Shadow");
    this.option15.html("");
    this.option16.html("");


    this.question5.html("5. I'm the rare case when today comes before yesterday?")
    this.option17.html("Calender");
    this.option18.html("Dictionary");
    this.option19.html("");
    this.option20.html("");
}
}