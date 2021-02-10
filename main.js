var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
      player_object=Img;
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({
          top:player_y,left:player_x
      });
      canvas.add(player_object);
    });
}
//player_update();
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
     block_image_object=img;
     block_image_object.scaleToWidth(block_image_width);
     block_image_object.scaleToHeight(block_image_height);
     block_image_object.set({
         top:player_y,left:player_x
     });
     canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.keyCode=="80"&& e.shiftKey==true){
        console.log("shift&p pressed together")
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.keyCode=="77"&& e.shiftKey==true){
        console.log("shift&m pressed together")
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
        if(keypressed=="37"){
            left()
            console.log("leftkeypressed");
        }
        if(keypressed=="38"){
            up()
            console.log("upkeypressed");
        }
        if(keypressed=="39"){
            right()
            console.log("rightkeypressed");
        }
        if(keypressed=="40"){
            down()
            console.log("downkeypressed");
        }
        if(keypressed=="67"){
            new_image("cloud.jpg");
            console.log("c pressed");
        }
        if(keypressed=="68"){
            new_image("dark_green.png");
            console.log("d pressed");
        }
        if(keypressed=="71"){
            new_image("ground.png");
            console.log("g pressed");
        }
        if(keypressed=="76"){
            new_image("light_green.png");
            console.log("l pressed");
        }
        if(keypressed=="82"){
            new_image("roof.jpg");
            console.log("r pressed");
        }
        if(keypressed=="84"){
            new_image("trunk.jpg");
            console.log("t pressed");
        }
        if(keypressed=="85"){
            new_image("unique.png");
            console.log("u pressed");
        }
        if(keypressed=="87"){
            new_image("wall.jpg");
            console.log("w pressed");
        }
        if(keypressed=="89"){
            new_image("yellow_wall.png");
            console.log("y pressed");
        }
    
}
     function up(){
         if(player_y>0){
             player_y=player_y-block_image_height;
             canvas.remove(player_object);
             player_update();
             console.log("x="+player_x+"y="+player_y)
         }
     } 
     function down(){
         if(player_y<500){
             player_y=player_y+block_image_height;
             canvas.remove(player_object);
             player_update();
             console.log("x="+player_x+"y="+player_y);
         }
     }  
     function right(){
         if(player_x<900){
             player_x=player_x+block_image_width;
             canvas.remove(player_object);
             player_update();
             console.log("x="+player_x+"y="+player_y);
         }
     }   
     function left(){
         if(player_x>0){
             player_x=player_x-block_image_width;
             canvas.remove(player_object);
             player_update();
             console.log("x="+player_x+"y="+player_y);
         }
     }
