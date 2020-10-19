class Paper{
    constructor(x,y,w,h){
        var options={
            restitution:0.5,
            density:1.0,
            friction:0.5,

    }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w
    this.h = h
    World.add(world,this.body)
    }
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}

}