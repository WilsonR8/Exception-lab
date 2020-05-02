class figure {
    constructor(px, py, tam, vel) {
        this.px = px;
        this.py = py;
        this.tam = tam;
        this.vel = vel;
    }


    move() {
       
    }

    draw() {

    }

    tamdoble(){
        if(this.tam < 100){
            this.tam *= 2;
            }
    }

}