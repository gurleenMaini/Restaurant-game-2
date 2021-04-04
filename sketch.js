var waiter, costumer, chef, manager;
var block1, block2, block3, block4, block5, block6;
var block7,block8,block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17;
var line18,line19,line20,line21,line22,line23,line24,line25,line26,line27,line28;
var line29,line30,line31,lin32,line33,line34,line35,line36,line37,line38,line39,line40,line41,line42,line43,line44,line45,line46,line47,line48;
var table1, table2, table3, table4;
var chair1, chair2, chair3, chair4, chair5, chair6, chair7, chair8, chair9, chair10, chair11, chair12, chair13, chair14, chair15, chair16;
var gameState= 0;
var score= 0;

function setup(){
  createCanvas(1600,950);
  waiter= createSprite(400,300,40,40);
  chef= createSprite(50,300,40,40);
  manager= createSprite(50,800,40,40);

  block1= createSprite(100,900,200,20);
  block2= createSprite(200,800,20,200);
  block3= createSprite(100,700,200,20);

  block4= createSprite(100,550,200,20);
  block5= createSprite(200,350,20,400);
  block6= createSprite(100,150,200,20);

  block7= createSprite(1500,70,20,150);
  block8= createSprite(1400,100,20,100);
  block9= createSprite(1450,150,100,20);

  block10= createSprite(600,940,80,20);
  block11= createSprite(720,940,80,20);
  block12= createSprite(840,940,80,20);
  block13= createSprite(960,940,80,20);
  block14= createSprite(1080,940,80,20);
  block15= createSprite(1200,940,80,20);
  block16= createSprite(1320,940,80,20);
  block17= createSprite(1440,940,80,20);
  block18= createSprite(1560,940,80,20);

  line1= createSprite(550,200,20,400);
  line2= createSprite(550,750,20,400);

  line3= createSprite(670,400,260,20);
  line4= createSprite(670,550,260,20);
  line5= createSprite(800,380,20,150);
  line6= createSprite(880,370,20,200);
  line7= createSprite(960,280,180,20);
  line8= createSprite(940,260,20,120);
  line9= createSprite(900,200,100,20);
  line10= createSprite(850,210,20,60);
  line11= createSprite(900,150,20,120);
  line12= createSprite(960,160,150,20);
  line13= createSprite(960,200,150,20);
  line14= createSprite(960,350,80,20);
  line15= createSprite(910,380,20,80);
  line16= createSprite(1000,380,20,80);
  line17= createSprite(1050,360,20,180);
  line18= createSprite(930,70,400,20);
  line19= createSprite(1220,380,200,20);
  line20= createSprite(1250,400,20,80);
  line21= createSprite(1290,450,100,20);
  line22= createSprite(1360,380,20,160);
  line23= createSprite(1380,350,60,20);
  line24= createSprite(1530,250,150,20);
  line25= createSprite(1500,290,20,150);
  line26= createSprite(1530,420,180,20);
  line27= createSprite(1455,210,110,20);
  line28= createSprite(1160,450,20,120);

  line29= createSprite(800,600,20,160);
  line30= createSprite(880,650,20,200);
  line31= createSprite(960,760,180,20);
  line32= createSprite(1050,645,20,250);
  line33= createSprite(910,650,20,80);
  line34= createSprite(960,680,80,20);
  line35= createSprite(1000,650,20,80);
  line36= createSprite(850,800,20,120);
  line37= createSprite(950,820,180,20);
  line38= createSprite(1150,580,200,20);
  line39= createSprite(1320,500,20,90);
  line40= createSprite(1590,700,20,400);
  line41= createSprite(1450,520,20,200);
  line42= createSprite(1540,550,80,20);
  line43= createSprite(1500,680,160,20);
  line44= createSprite(1460,880,240,20);
  line45= createSprite(1400,850,20,80);
  line46= createSprite(1500,800,20,150);
  line47= createSprite(1450,750,180,20);
  line48= createSprite(1420,600,120,20);

  table1= createSprite(650,220,180,70);
  chair1= createSprite(700,150,50,50);
  chair2= createSprite(600,150,50,50);
  chair3= createSprite(700,290,50,50);
  chair4= createSprite(600,290,50,50);

  table2= createSprite(650,750,180,70);
  chair5= createSprite(700,680,50,50);
  chair6= createSprite(600,680,50,50);
  chair7= createSprite(700,820,50,50);
  chair8= createSprite(600,820,50,50);

  table3= createSprite(1200,220,180,70);
  chair9= createSprite(1250,150,50,50);
  chair10= createSprite(1150,150,50,50);
  chair11= createSprite(1250,290,50,50);
  chair12= createSprite(1150,290,50,50);

  table4= createSprite(1200,750,180,70);
  chair13= createSprite(1250,680,50,50);
  chair14= createSprite(1150,680,50,50);
  chair15= createSprite(1250,820,50,50);
  chair16= createSprite(1150,820,50,50);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  waiter.setVelocity(0,0);
  if(keyIsDown(UP_ARROW)){
    waiter.velocityY= -2;
  }
  if(keyIsDown(DOWN_ARROW)){
    waiter.velocityY= 2;
  }
  if(keyIsDown(LEFT_ARROW)){
    waiter.velocityX= -2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    waiter.velocityX= 2;
  }
  drawSprites();
  waiter.bounceOff(line1);
  waiter.bounceOff(line2);
  waiter.bounceOff(line3);
  waiter.bounceOff(line4);
  waiter.bounceOff(line5);
  waiter.bounceOff(line6);
  waiter.bounceOff(line7);
  waiter.bounceOff(line8);
  waiter.bounceOff(line9);
  waiter.bounceOff(line10);
  waiter.bounceOff(line11);
  waiter.bounceOff(line12);
  waiter.bounceOff(line13);
  waiter.bounceOff(line14);
  waiter.bounceOff(line15);
  waiter.bounceOff(line16);
  waiter.bounceOff(line17);
  waiter.bounceOff(line18);
  waiter.bounceOff(line19);
  waiter.bounceOff(line20);
  waiter.bounceOff(line21);
  waiter.bounceOff(line22);
  waiter.bounceOff(line23);
  waiter.bounceOff(line24);
  waiter.bounceOff(line25);
  waiter.bounceOff(line26);
  waiter.bounceOff(line27);
  waiter.bounceOff(line28);
  waiter.bounceOff(line29);
  waiter.bounceOff(line30);
  waiter.bounceOff(line31);
  waiter.bounceOff(line32);
  waiter.bounceOff(line33);
  waiter.bounceOff(line34);
  waiter.bounceOff(line35);
  waiter.bounceOff(line36);
  waiter.bounceOff(line37);
  waiter.bounceOff(line38);
  waiter.bounceOff(line39);
  waiter.bounceOff(line40);
  waiter.bounceOff(line41);
  waiter.bounceOff(line42);
  waiter.bounceOff(line43);
  waiter.bounceOff(line44);
  waiter.bounceOff(line45);
  waiter.bounceOff(line46);
  waiter.bounceOff(line47);
  waiter.bounceOff(line48);

  waiter.bounceOff(block1);
  waiter.bounceOff(block2);
  waiter.bounceOff(block3);
  waiter.bounceOff(block4);
  waiter.bounceOff(block5);
  waiter.bounceOff(block6);
  waiter.bounceOff(block7);
  waiter.bounceOff(block8);
  waiter.bounceOff(block9);
  waiter.bounceOff(block10);
  waiter.bounceOff(block11);
  waiter.bounceOff(block12);
  waiter.bounceOff(block13);
  waiter.bounceOff(block14);
  waiter.bounceOff(block15);
  waiter.bounceOff(block16);
  waiter.bounceOff(block17);
  waiter.bounceOff(block18);

}