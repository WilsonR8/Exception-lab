let bg;
let bg2;
let num = 0;
let scrn = 0;
let nxt = false;
let paintbubble = false;
let nummax = false;
let nummin = false;
let cubes = [];
let bubbles = [];

function setup() {
    createCanvas(1200, 700);
    bg = loadImage('image/bg.png');
    bg2 = loadImage('image/bg2.png');


    for (let i = 0; i < num; i++) {
        cubes[i] = new square(100, 100, 50, 2)
    }

    for (let j = 0; j < num; j++) {
        bubbles[j] = new circle(100, 100, 50, 2)
    }
}











function draw() {
    switch (scrn) {
        case 0: image(bg, 0, 0);
            fill(255);
            textSize(150);
            text(num, 516, 400);


            if (nxt == true) {
                try {
                    numexc(num);
                } catch (error) {
                    console.log(error.message);
                    fill(255);
                    textSize(20);
                    text(error.message, 416, 540);
                    console.log("error");
                }
            }






            break;

        case 1: image(bg2, 0, 0);
            for (let i = 0; i < cubes.length; i++) {
                cubes[i].paint();
                cubes[i].move();
            }

            if (paintbubble == true) {
                for (let j = 0; j < bubbles.length; j++) {
                    bubbles[j].paint();
                    bubbles[j].move();
                }
            }

            if (nummax == true) {
                try {
                    nmax(num);
                } catch (error) {
                    console.log(error.message);
                    fill(255);
                    textSize(20);
                    text(error.message, 416, 540);
                }
            }

            if (nummin == true) {
                try {
                    nmin(num);
                } catch (error) {
                    console.log(error.message);
                    fill(255);
                    textSize(20);
                    text(error.message, 416, 540);
                }
            }


            break;






    }







    fill(255);
    textSize(20);
    text("x=" + mouseX + "y=" + mouseY, mouseX, mouseY);
}

function mousePressed() {
    if (scrn == 0) {
        if ((mouseX > 266 && mouseX < 330) && (mouseY > 310 && mouseY < 390)) {
            if (num > 1) { num--; }
        }

        if ((mouseX > 850 && mouseX < 927) && (mouseY > 305 && mouseY < 390)) {
            num++;
            cubes.push(new square(random(0, 1200), random(70, 320), 50, 2));
        }


        if ((mouseX > 440 && mouseX < 762) && (mouseY > 594 && mouseY < 650)) {
            nxt = !nxt;
            if (num > 0) { scrn++; }

        }
    }


    if (scrn == 1) {
        if ((mouseX > 389 && mouseX < 457) && (mouseY > 9 && mouseY < 60)) {
            nummin=!nummin
            if (num > 1) { num--; 
            cubes.pop(new square(random(0, 1200), random(70, 320), 50, 2));
            bubbles.pop(new circle(random(0, 1200), random(370, 700), 50, 2));
            print("-");
        }}

        if ((mouseX > 497 && mouseX < 570) && (mouseY > 9 && mouseY < 60)) {
            nummax = !nummax;
            if (num <= 9) { num++; 
            cubes.push(new square(random(0, 1200), random(70, 320), 50, 2));
            bubbles.push(new circle(random(0, 1200), random(370, 700), 50, 2));}
            print("+");
        }

        if ((mouseX > 609 && mouseX < 681) && (mouseY > 9 && mouseY < 60)) {
            cubes.forEach(elemento => {
                elemento.tamdoble();
            });
            bubbles.forEach(elembubbles => {
                elembubbles.tamdoble();
            });
            print("x2");
        }

        if ((mouseX > 726 && mouseX < 802) && (mouseY > 9 && mouseY < 60)) {
            paintbubble = !paintbubble
            bubbles = cubes.map(elemento => {
                return elemento = new circle(random(0, 1200), random(370, 700), 50, 2);
            })


        }
    }
}



function numexc(num) {
    if (scrn == 0) {
        if (num == 0) { throw new Myexc('The number must be higher than zero') }

    }
}

function nmax(num) {
    
    if (scrn == 1) {
        if (num == 10) { throw new Myexc('The number of elements has reach the limit') }
    }
}


function nmin(num) {
    
    if (scrn == 1) {
        if (num == 1) { throw new Myexc('The number of elements has reach the limit') }
    }
}




