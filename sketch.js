var ball,position;
var db,dbref;
function setup(){
    createCanvas(500,500);
    db=firebase.database();

    dbref=db.ref("Ball/position");
    dbref.on("value",readdata,showerr);


    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    db.ref("Ball/position").set({
        x:position.x+x,
        y:position.y+y
    })
}
function readdata(data)
{
    position=data.val();

    ball.x=position.x;
    ball.y=position.y;

}

function showerr(){
console.log("There is an error");
}