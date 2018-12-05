$(document).ready(function(){
  $( window ).ready(arrangeObjects);
  var scorePlayerOne=0;
  var scorePlayerTwo=0;

  var turnPlayerOne=true;

  var flag = 0;

  var num=5;
  var v=8;
  var h=50;

   $(".scorePlayerOne").addClass("enlighted");

  //var score=0.3*($(window).height()) + (num*h+(num+1)*v)/2-40;
  console.log($(window).width());

$( window ).resize(arrangeObjects);

  function position2(){
    console.log("kkkkk")
  }

  function arrangeObjects() {
  if($(window).width()>1200){
    var positionScore=0.5*($(window).height());
  var positionContainer=0.3*($(window).height());



  $(".score").css("top",positionScore);
  $(".container").css("top",positionContainer);
  }

  if($(window).width()<1200){
    var positionScore=0.1*($(window).height());
  var positionContainer=0.1*($(window).height());


  //console.log(score);
  $(".score").css("top",positionScore);
  $(".container").css("top",positionContainer);
  }
  };

  //Matrix-h (Matrix horizontal bars)
  var p= num+1;
  var matrixH=[];
  for (var i = 0; i < p; i++) {
    matrixH[i] = new Array(num);
  }

  //Matrix-v (Matrix Vertical bars)
  var matrixV=[];
  for (var i = 0; i < num; i++) {
    matrixV[i] = new Array(p);
  }


  //I give the value "mark" to those bars that are in the border

  for (var i = 0; i < num; i++) {
    matrixH[0][i]="marked";
    matrixH[num][i]="marked";

    matrixV[i][0]="marked";
    matrixV[i][num]="marked";

  }
  //console.log(matrixH);
  //console.log(matrixV);


  //Creation of the board
   //first square
$("#container").append(
  `<div style="left:0px" class="block-11">
    <div class="bottom" id=11></div>
    <div class="bar up" id=h11> </div>
    <div class="bar left" id=v11> </div>
    <div class="bar down" id=h21> </div>
    <div class="bar right" id=v12> </div>
  </div>`);

      $(`.block-11`).css("position", "block");


for (var i=2; i<=num; i++) {
  //first row
  $("#container").append(
    `<div style="left:${i*v+i*h-v-h}px" class="block-1${i}">
      <div class="bottom"></div>
      <div class="bar up" id=h1${i}> </div>
      <div class="bar down" id=h2${i}> </div>
      <div class="bar right" id=v1${i+1}> </div>
    </div>`);

  $(`.block-1${i}`).css("position", "absolute");

  //first column

  $("#container").append(
    `<div style="top:${i*v+i*h-h-v}px" class="block-${i}1">
      <div class="bottom"></div>
      <div class="bar left" id=v${i}1> </div>
      <div class="bar down" id=h${i+1}1> </div>
      <div class="bar right" id=v${i}2> </div>
     </div>`);

   $(`.block-${i}1`).css("position", "absolute");

  //rest of the elements

    for (var j=2; j<=num; j++) {
      $("#container").append(
        `<div style="top:${i*v+i*h-v-h}px; left:${j*v+j*h-v-h}px" class="block-${i}${j}">
            <div class="bottom"></div>
            <div class="bar down" id=h${i+1}${j}> </div>
            <div class="bar right" id=v${i}${j+1}> </div>
          </div>`);

       $(`.block-${i}${j}`).css("position", "absolute");


}

  }

 //Give black color to the bars that are in the border of the board.
  for (var k=1; k<=num; k++) {
    $(`.block-1${k} .up`).addClass("black")//.attr("id",`1${k}`);
    $(`.block-${num}${k} .down`).addClass("black")//.attr("id",`${num}${k}`);
    $(`.block-${k}1 .left`).addClass("black")//.attr("id",`${k}1`);
    $(`.block-${k}${num} .right`).addClass("black")//.attr("id",`${k}${num+1}`);



  }




   $(".bar").click( function() {

    highlightTurn()


     flag=0;
     changeBarColor(this);
   //  console.log("turnPlayerOne = " + turnPlayerOne);
    // console.log("flag = " + flag);



   // console.log(matrixH)
   // console.log(this.id[0]);
  // console.log(matrixV);


  //  console.log(this.id)
  //   console.log(matrixH[parseInt(this.id[1])-1][parseInt(this.id[2])-1])

     if(flag==0){
       if(this.id[0]=="h" && matrixH[parseInt(this.id[1])-1][parseInt(this.id[2])-1]!=="marked"){
        //console.log("hi there")
       turnPlayerOne = !turnPlayerOne
       highlightTurn();
        }
       if(this.id[0]=="v" && matrixV[parseInt(this.id[1])-1][parseInt(this.id[2])-1]!=="marked"){
        //console.log("hi there")
       turnPlayerOne = !turnPlayerOne
       highlightTurn();
        }

     }

       if(this.id[0]=="h") {
      matrixH[parseInt(this.id[1]-1)][parseInt(this.id[2]-1)]="marked"
    }
     if(this.id[0]=="v") {
      matrixV[parseInt(this.id[1]-1)][parseInt(this.id[2]-1)]="marked"
    }
   });

   function changeBarColor(target){
     //console.log(target.id)

     //console.log(matrixH[parseInt(target.id[1])-1][parseInt(target.id[2])-1]);
       if(target.id[0]=="h" && matrixH[parseInt(target.id[1])-1][parseInt(target.id[2])-1]!=="marked"){
         //console.log("we're getting there");
          winCondition(target);
         var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: target,
    scale: 2,
  duration: 1000,

  })
  .add({
    targets: target,
   scale: 1,
   backgroundColor: '#0000ff',
  duration: 1000,

  })
  .add({
    targets: target,
    scale: 1,
  duration: 1000,
  });
       }

      if(target.id[0]=="v" && matrixV[parseInt(target.id[1])-1][parseInt(target.id[2])-1]!=="marked"){
         //console.log("we're getting there");
        winCondition(target);
         var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: target,
    scale: 2,
  duration: 1000,

  })
  .add({
    targets: target,
   scale: 1,
   backgroundColor: '#0000ff',
  duration: 1000,

  })
  .add({
    targets: target,
    scale: 1,
  duration: 1000,
  });
       }




    }


   function winCondition(target){
     //console.log(matrixV[parseInt(target[1])][parseInt(target[2])-2]);
     if(target.id[0]=="v" && matrixV[parseInt(target.id[1])-1][parseInt(target.id[2])-2]=="marked" && matrixH[parseInt(target.id[1])-1][parseInt(target.id[2])-2]=="marked" && matrixH[parseInt(target.id[1])][parseInt(target.id[2])-2]=="marked"){
       //console.log("works1");
      // console.log(target);
       increaseScore()
       flag=1;

       var a=parseInt(target.id[1]);

       var b = parseInt(target.id[2])-1;

       var basicTimeline = anime.timeline();



basicTimeline
  .add({
    targets: `.block-${a}${b} .bottom`,
  duration: 1000,
  scale:0,
  easing: 'easeInOutQuart'
  })

  .add({
    targets: `.block-${a}${b} .bottom`,
   scale: 1,
   backgroundColor: '#8B0000',
  duration: 1000,
 easing: 'easeInOutQuart'

  })
  .add({
    targets: `.block-${a}${b} .bottom`,
    scale: 1,
  duration: 1000,
  easing: 'easeInOutQuart'
  });
     }

     if(target.id[0]=="v" && matrixV[parseInt(target.id[1])-1][parseInt(target.id[2])]=="marked" && matrixH[parseInt(target.id[1])-1][parseInt(target.id[2])-1]=="marked"  && matrixH[parseInt(target.id[1])][parseInt(target.id[2])-1]=="marked"){
       //console.log("works2");
      // console.log(target);
       var a=parseInt(target.id[1]);
        flag=1;
       var b = parseInt(target.id[2]);
       increaseScore()
       var basicTimeline = anime.timeline();



basicTimeline
  .add({
    targets: `.block-${a}${b} .bottom`,
  duration: 1000,
  scale:0,
  easing: 'easeInOutQuart'
  })

  .add({
    targets: `.block-${a}${b} .bottom`,
   scale: 1,
   backgroundColor: '#8B0000',
  duration: 1000,
 easing: 'easeInOutQuart'

  })
  .add({
    targets: `.block-${a}${b} .bottom`,
    scale: 1,
  duration: 1000,
  easing: 'easeInOutQuart'
  });
     }

      if(target.id[0]=="h" && matrixH[parseInt(target.id[1])-2][parseInt(target.id[2])-1]=="marked"  && matrixV[parseInt(target.id[1])-2][parseInt(target.id[2])-1]=="marked"  && matrixV[parseInt(target.id[1])-2][parseInt(target.id[2])]=="marked"){
       //console.log("works3");
      increaseScore()
       var a=parseInt(target.id[1])-1;
    flag=1;
       var b = parseInt(target.id[2]);

       var basicTimeline = anime.timeline();



basicTimeline
  .add({
    targets: `.block-${a}${b} .bottom`,
  duration: 1000,
  scale:0,
  easing: 'easeInOutQuart'
  })

  .add({
    targets: `.block-${a}${b} .bottom`,
   scale: 1,
   backgroundColor: '#8B0000',
  duration: 1000,
 easing: 'easeInOutQuart'

  })
  .add({
    targets: `.block-${a}${b} .bottom`,
    scale: 1,
  duration: 1000,
  easing: 'easeInOutQuart'
  });
     }

   if(target.id[0]=="h" && matrixH[parseInt(target.id[1])][parseInt(target.id[2])-1]=="marked"  && matrixV[parseInt(target.id[1])-1][parseInt(target.id[2])-1]=="marked"  && matrixV[parseInt(target.id[1])-1][parseInt(target.id[2])]=="marked"){
      // console.log("works4");
      // console.log(target);
     increaseScore()
       var a=parseInt(target.id[1]);
    flag=1;
       var b = parseInt(target.id[2]);

       var basicTimeline = anime.timeline();



basicTimeline
  .add({
    targets: `.block-${a}${b} .bottom`,
  duration: 1000,
  scale:0,
  easing: 'easeInOutQuart'
  })

  .add({
    targets: `.block-${a}${b} .bottom`,
   scale: 1,
   backgroundColor: '#8B0000',
  duration: 1000,
 easing: 'easeInOutQuart'

  })
  .add({
    targets: `.block-${a}${b} .bottom`,
    scale: 1,
  duration: 1000,
  easing: 'easeInOutQuart'
  });
     }

   }

    function increaseScore(){
    if (turnPlayerOne) {
      scorePlayerOne++;
      $(".scorePlayerOne span").text(scorePlayerOne);

    }
      else{
        scorePlayerTwo++;
        $(".scorePlayerTwo span").text(scorePlayerTwo);
      }

  }

    function highlightTurn(){
      if(turnPlayerOne){
        $(".scorePlayerOne").addClass("enlighted");
        $(".scorePlayerTwo").removeClass("enlighted");

      }
      else{
        $(".scorePlayerOne").removeClass("enlighted");
        $(".scorePlayerTwo").addClass("enlighted");
      }
    }


});
