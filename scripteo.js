function iniciar(){
	var elemento=document.getElementById("lienzo");
	lienzo=elemento.getContext("2d");


	//Aquí es el cuadrado
	lienzo.shadowColor="rgba(0,0,0,0.5)";
	lienzo.shadowOffsetX=3;
	lienzo.shadowOffsetY=3;
	lienzo.shadowBlur=4;
	lienzo.font="bold 24px verdana";
	lienzo.textAlign="start";
	lienzo.textBaseline="top";
	lienzo.fillText("Soy un cuadrado",800,200);
	var dimensiones=lienzo.measureText("Soy un cuadrado");
	lienzo.strokeRect(800,200,dimensiones.width+10,48);


	//Aquí es el triangulo
	lienzo.shadowColor="rgba(242,98,16,8)";
	lienzo.shadowOffsetX=3;
	lienzo.shadowOffsetY=3;
	lienzo.shadowBlur=4;
	lienzo.font="bold 12px verdana"
	lienzo.textAlign="start";
	lienzo.textBaseline="top";
	lienzo.fillText("Soy un triangulo",400,400);
	var dimensionestri=lienzo.measureText("Soy un triangulo");
	lienzo.beginPath();
    lienzo.moveTo(375,420);
    lienzo.lineTo(420,350);
    lienzo.lineTo(550,420);
    lienzo.closePath();
    lienzo.stroke();


    //Aquí haremos el pentagono
    lienzo.shadowColor="rgba(18,78,238,8)";
	lienzo.shadowOffsetX=3;
	lienzo.shadowOffsetY=3;
	lienzo.shadowBlur=4;
	lienzo.font="bold 10px verdana"
	lienzo.textAlign="start";
	lienzo.textBaseline="top";
	lienzo.fillText("Soy un hexagono",30,65);
	var dimensionespen=lienzo.measureText("Soy un hexagono");
   	lienzo.beginPath();
   	lienzo.moveTo(50,15);
   	lienzo.lineTo(112,15);
   	lienzo.lineTo(143,69);
   	lienzo.lineTo(112,123);
   	lienzo.lineTo(50,123);
   	lienzo.lineTo(19,69);
   	lienzo.closePath();
   	lienzo.stroke();
}
window.addEventListener("load",iniciar,false);