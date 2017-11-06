//definición de las variables
var c, ctx, x, y, mX, mY;

//función de configuración

function setear() {
  c = document.getElementById("canvas");
  //establecer el centro del canvas
  x = c.width / 2;
  y = c.height / 2;
  //Creación del contexto
  ctx = c.getContext("2d");
  //El color del pixel
  ctx.fillStyle = "#C70039";
  //llamra al método dibujar 35 ms
  setInterval(dibujar, 35);
}

function dibujar() {
  ctx.fillRect(x,y,10,10);
  defRuta();
}


function defRuta() {
  mX = Math.floor((Math.random() * 4) + 1);
  mY = Math.floor((Math.random() * 4) + 1);
  console.log(mX);
  switch (mX) {
    case 1:
      x+=4
    break;
    case 2:
        x-=4
    break;
    case 3:
        x+=2
    break;
    case 4:
      x-=2
    break;
    default:

  };
  console.log(mY);
  switch (mY) {
    case 1:
      y+=4
    break;
    case 2:
        y-=4
    break;
    case 3:
        y+=2
    break;
    case 4:
      y-=2
    break;
    default:

  }
}
onload=setear
