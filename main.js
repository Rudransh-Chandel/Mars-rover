canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverWidth = 110;
roverHeight = 100;

roverImage = "rover.png";

backgroundImage = "mars.jpg";

roverX = 15;
roverY = 15;

function add()
{
    bgIMG = new Image();
    bgIMG.onload = uploadBackground;
    bgIMG.src = backgroundImage;

    RoverIMG = new Image();
    RoverIMG.onload = uploadRover;
    RoverIMG.src = roverImage;
}

function uploadBackground()
{
    ctx.drawImage(bgIMG, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(RoverIMG, roverX, roverY, roverWidth, roverHeight);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37')
    {
    left();
    console.log("left");
    }

    if(keyPressed == '38')
    {
    up();
    console.log("up");
    }
    
    if(keyPressed == '39')
    {
    right();
    console.log("right");
    }
    
    if(keyPressed == '40')
    {
    down();
    console.log("down");
    }
}

function up()
{
    if(roverY >=0)
    {
      roverY = roverY - 10;
      uploadBackground();
      uploadRover();
    }
}

function down()
{
    if(roverY <=550)
    {
      roverY = roverY + 10;
      uploadBackground();
      uploadRover();
    }
}

function left()
{
    if(roverX >=0)
    {
      roverX = roverX - 10;
      uploadBackground();
      uploadRover();
    }
}

function right()
{
    if(roverX <=750)
    {
      roverX = roverX + 10;
      uploadBackground();
      uploadRover();
    }
}







































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































