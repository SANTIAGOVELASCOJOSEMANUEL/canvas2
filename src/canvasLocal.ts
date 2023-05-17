


export class CanvasLocal {
    private ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

  //atributos
  protected graphics: CanvasRenderingContext2D;
  maxX: number;
  maxY: number ;
  pixelsize: number;
  rWidth: number = 60.0;
  rHeight: number = 50.0;
  centerX: number;
  centerY: number;

  public constructor(/*g: CanvasRenderingContext2D,*/context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = context;
    this.ctx = context;
    this.canvas = canvas;
    this.maxX = canvas.width - 1;
    this.maxY = canvas.height - 1;
    
    this.pixelsize = Math.max(this.rWidth/this.maxX, this.rHeight/this.maxY);
    this.centerX = this.maxX/10; 
    this.centerY = this.maxY/ 10*8;
    
  }
  /*public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = g;
    this.canvas = canvas;
    this.maxX = canvas.width - 1;
    this.maxY = canvas.height - 1;
    
    this.pixelsize = Math.max(this.rWidth/this.maxX, this.rHeight/this.maxY);
    this.centerX = this.maxX/10; 
    this.centerY = this.maxY/ 10*8;
    
  }*/

 



  iX( x: number):number { return Math.round(this.centerX + x/this.pixelsize); }
  iY( y: number):number { return Math.round(this.centerY - y/this.pixelsize); }
  
  drawLine(x1: number, y1: number, x2: number, y2:number) {
    //console.log("cadena"); 
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }/*
  MA(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0), this.iY(y+0), this.iX(x+1*s), this.iY(y+0));
    this.drawLine(this.iX(x+0), this.iY(y+0), this.iX(x+0), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  mi(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1*s));
  }*/
  A(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.5*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0), this.iY(y+0*s), this.iX(x), this.iY(y+1.5*s));
  }
  a(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x + 0.9*s), this.iY(y + 0.0), this.iX(x + 0.9 * s), this.iY(y + 1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  B(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.1), this.iY(y+1.9*s), this.iX(x+0.1), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.2*s), this.iX(x+0.9*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.7*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
  }

  b(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0));
    this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.2 * s));
    this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.2 * s), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s));
    this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.8 * s), this.iX(x + 0.7 * s), this.iY(y + 1 * s));
    this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
    this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
   this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0));
   this.drawLine(this.iX(x + 0), this.iY(y + 0.0 * s), this.iX(x + 0.0), this.iY(y + 1.9 * s));
  }

  C(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.2*s), this.iX(x+0*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  c(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }
  D(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+0.6*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.3*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.3*s), this.iX(x+1*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.6*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0), this.iY(y+1.9*s));

  }
  d(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0*s));
  }
  E(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.9*s), this.iX(x+0.9*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0*s), this.iY(y+0*s));
  }

  e(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));//bace de abajo
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));//digonal derecha abajo
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.5*s), this.iX(x+0.9*s), this.iY(y+0.8*s));//linea recta derecha
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.5*s), this.iX(x+0*s), this.iY(y+0.5*s));//linea de enmedio 
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));//diagonal derecha arriba
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));//bace arriba
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));//diagonal izquierda arriba 
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));//linea recta izquierda
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));//diagonal izquierda abajo
    
  }

  F(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0.9*s), this.iX(x+0.9*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0*s), this.iY(y+0*s));
  }
  f(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.8*s), this.iX(x+0.6*s), this.iY(y+1*s));
    //this.drawLine(this.iX(x+0.6*s), this.iY(y+1.6), this.iX(x+0.8*s), this.iY(y+1.3*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.8*s), this.iX(x+0.5*s), this.iY(y+0.0*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+0.5*s), this.iX(x+0.7*s), this.iY(y+0.5*s));
  }

  G(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0.8*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.7*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    //this.drawLine(this.iX(x+0.8*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.7*s));
  }
  g(x:number, y:number, s:number):void{
    /*this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    */
    this.o(x, y, s);
   //Tapa down J
    this.drawLine(this.iX(x+0.7*s), this.iY(y+-0.9*s), this.iX(x+0.9*s), this.iY(y+-0.7*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+-0.9*s), this.iX(x+0.7*s), this.iY(y+-0.9*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+-0.8*s), this.iX(x+0.2*s), this.iY(y+-0.9*s));
    this.drawLine(this.iX(x + 0.9 * s), this.iY(y + -0.7 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
  }
  H(x:number, y:number, s:number):void{   
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
     
  }
  h(x:number, y:number, s:number):void{    
    this.drawLine(this.iX(x+0.9*s), this.iY(y-0*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0*s), this.iX(x+0.0), this.iY(y+1.9*s)); 
       
  }
  I(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+0.0*s), this.iX(x+1*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+1.9*s));
    }
  i(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.0*s), this.iX(x+0.5*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.9*s), this.iX(x+0.5*s), this.iY(y+1*s));
  }
  
  J(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1.9*s), this.iX(x+0.5*s), this.iY(y+0.4*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+0.4*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.3*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.9*s));
  }
  
  j(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y-0.3*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y-0.3*s), this.iX(x+0.3*s), this.iY(y-0.3*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1.3*s), this.iX(x+0.5*s), this.iY(y+1.1*s));
    //this.drawLine(this.iX(x-0.3*s), this.iY(y-0.9*s), this.iX(x+0.1*s), this.iY(y-0.9*s));
  }
  
  K(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  
  k(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.4*s), this.iX(x+0.6*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.4*s), this.iX(x+0.6*s), this.iY(y+0*s));
  }
  
  L(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  
/*  l(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.8*s), this.iX(x+0.5*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.2*s), this.iX(x+0.7*s), this.iY(y+0*s));
  }*/
  
  l(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+0*s), this.iX(x+0.7*s), this.iY(y+0*s));
  }

  M(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+1), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  
  m(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0), this.iY(y), this.iX(x), this.iY(y+1.1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.9*s), this.iX(x+0.1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+1*s), this.iX(x+0.4*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.6*s), this.iX(x+0.6*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0), this.iX(x+0.5*s), this.iY(y+0.6*s));
  }
  
  N(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+0.8*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s));
    /*this.drawLine(this.iX(x+0*s), this.iY(y), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+0*s));*/
  }
  n(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.9*s), this.iY(y), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y));
  }        

  Ñ(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+2.2*s), this.iX(x+0.2*s), this.iY(y+2.3*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+2.3*s), this.iX(x+0.3*s), this.iY(y+2.3*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+2.3*s), this.iX(x+0.5*s), this.iY(y+2.1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+2.1*s), this.iX(x+0.6*s), this.iY(y+2.1*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+2.1*s), this.iX(x+1*s), this.iY(y+2.3*s));
    
    this.drawLine(this.iX(x+0*s), this.iY(y), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  ñ(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1.2*s), this.iX(x+0.2*s), this.iY(y+1.3*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.3*s), this.iX(x+0.3*s), this.iY(y+1.3*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+1.3*s), this.iX(x+0.5*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1.2*s), this.iX(x+0.6*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1.2*s), this.iX(x+1*s), this.iY(y+1.3*s));
    

    this.drawLine(this.iX(x+0.9*s), this.iY(y), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y));
  } 
  O(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.2*s), this.iX(x+0*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.2*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  o(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }
  P(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.2*s), this.iX(x+0.9*s), this.iY(y+1.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.8*s), this.iX(x+0.7*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+2*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+2*s), this.iX(x+0.0), this.iY(y+1.8*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+1.2*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1.8*s), this.iX(x+0.0), this.iY(y+0*s));
  }
  p(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    this.drawLine(this.iX(x+0), this.iY(y+1.1*s), this.iX(x+0.0), this.iY(y-0.8*s));
  }
  Q(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.2*s), this.iX(x+0*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.2*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));

    this.drawLine(this.iX(x+0.7*s), this.iY(y+0.4*s), this.iX(x+1.2*s), this.iY(y+0*s));
  }

  q(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.9*s), this.iY(y-0.6*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
  }
  R(x:number, y:number, s:number):void{ 
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+1.7*s), this.iX(x+1*s), this.iY(y+1.1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+1.1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+1*s), this.iY(y+0*s));
  }

  r(x:number, y:number, s:number):void{ 
    this.drawLine(this.iX(x+0.55*s), this.iY(y+1*s), this.iX(x+0.25*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.25*s), this.iY(y+1*s), this.iX(x+0.25*s), this.iY(y+0.0*s));
    this.drawLine(this.iX(x + 0.9*s), this.iY(y + 1 * s), this.iX(x + 0.55*s), this.iY(y + 1 * s));
  }

  S(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+2*s), this.iX(x+0.8*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+1.8*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.8*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.8*s), this.iX(x+0*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.2*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.8*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.8*s), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0*s), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  s(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.3*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0.6*s), this.iX(x+0.0*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.3*s), this.iX(x+0.7*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.85*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0.6*s), this.iX(x+0.2*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  T(x:number,y:number,s:number) {
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+2*s));
  }
  t(x:number,y:number,s:number) {
    this.drawLine(this.iX(x+0.4*s), this.iY(y+1.9*s), this.iX(x+0.4*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+1.5*s), this.iX(x+1*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+0.2*s), this.iX(x+0.5*s), this.iY(y+0*s)); 
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s)); 
  }

  U(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  u(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  V(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  v(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x), this.iY(y+1*s), this.iX(x+0.45*s), this.iY(y));
    this.drawLine(this.iX(x + 0.45 * s), this.iY(y), this.iX(x + 0.9*s), this.iY(y + 1 * s));
  }

  W(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.25*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.25*s), this.iY(y+0), this.iX(x+0.5*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+2*s), this.iX(x+0.75*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.75*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  w(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.25*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.25*s), this.iY(y+0), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.75*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.75*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+1*s));
    /* this.drawLine(this.iX(x+0.1*s), this.iY(y+0), this.iX(x+0.4*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+0), this.iX(x+0.45*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.45*s), this.iY(y+0.2*s), this.iX(x+0.45*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.1*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+1*s));    
    this.drawLine(this.iX(x+0.45*s), this.iY(y+0.2*s), this.iX(x+0.5*s), this.iY(y+0));*/
  }


  X(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.2*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+0.9*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+2*s));
  }
  x(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  Y(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+0*s), this.iX(x+0.6*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+2*s));
  }
  y(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y-0.6*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.1*s), this.iX(x+0.1*s), this.iY(y+1*s));
  }

  Z(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.9*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+0*s));
  }

  z(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+0*s));
  }

  private drawString(cadena: string, x: number, y: number, size: number) {
    //this.ctx.font = `${size}px Arial`;
    //this.ctx.fillText(cadena, x, y);
    //this.ctx.drawString(palabra,1,2,5);
  //}
  //private drawString(cadena: string, x: number, y: number, size: number) {
    
    let posicion = 0;
    let arr = Array.from(cadena);
    arr.forEach(element => {
      switch (element) {
        case "A":
          
          this.A(x+posicion, y, size);
          posicion += size;
          break;
        case "B":
          this.B(x+posicion, y, size);
          posicion += size;
          break;
        case "C":
          this.C(x+posicion, y, size);
          posicion += size;
          break;
        case "D":
          this.D(x+posicion, y, size);
          posicion += size;
          break;
        case "E":
          this.E(x+posicion, y, size);
          posicion += size;
          break;
        case "F":
            this.F(x+posicion, y, size);
            posicion += size;
            break;
        case "G":
          this.G(x+posicion, y, size);
          posicion += size;
          break;
        case "H":
          this.H(x+posicion, y, size);
          posicion += size;
          break;
        case "I":
          this.I(x+posicion, y, size);
          posicion += size;
          break;
        case "J":
          this.J(x+posicion, y, size);
          posicion += size;
          break;
        case "K":
          this.K(x+posicion, y, size);
          posicion += size;
          break;
        case "L":
          this.L(x+posicion, y, size);
          posicion += size;
          break;
        case "M":
          this.M(x+posicion, y, size);
          posicion += size;
          break;
        case "N":
          this.N(x+posicion, y, size);
          posicion += size;
          break;
        case "O":
          this.O(x+posicion, y, size);
          posicion += size;
          break;
        case "P":
          this.P(x+posicion, y, size);
          posicion += size;
          break;
        case "Q":
          this.Q(x+posicion, y, size);
          posicion += size;
          break;
        case "R":
          this.R(x+posicion, y, size);
          posicion += size;
          break;
        case "S":
          this.S(x+posicion, y, size);
          posicion += size;
          break;
        case "T":
          this.T(x+posicion, y, size);
          posicion += size;
          break;
        case "U":
          this.U(x+posicion, y,size);
          posicion += size;
          break;
        case "V":
          this.V(x+posicion, y, size);
          posicion += size;
          break;
        case "W":
          this.W(x+posicion, y, size);
          posicion += size;
          break;
        case "X":
          this.X(x+posicion, y, size);
          posicion += size;
          break;
        case "Y":
          this.Y(x+posicion, y, size);
          posicion += size;
          break;
        case "Z":
          this.Z(x+posicion, y, size);
          posicion += size;
          break;
        case "a":
          this.a(x+posicion, y, size);
          posicion += size;
          break;
        case "b":
          this.b(x+posicion, y, size);
          posicion += size;
          break;
        case "c":
          this.c(x+posicion, y, size);
          posicion += size;
          break;
        case "d":
          this.d(x+posicion, y, size);
          posicion += size;
          break;
        case "e":
          this.e(x+posicion, y, size);
          posicion += size;
          break;
        case "f":
            this.f(x+posicion, y, size);
            posicion += size;
            break;
        case "g":
          this.g(x+posicion, y, size);
          posicion += size;
          break;
        case "h":
          this.h(x+posicion, y, size);
          posicion += size;
          break;
        case "i":
          this.i(x+posicion, y, size);
          posicion += size;
          break;
        case "j":
          this.j(x+posicion, y, size);
          posicion += size;
          break;
        case "k":
          this.k(x+posicion, y, size);
          posicion += size;
          break;
        case "l":
          this.l(x+posicion, y, size);
          posicion += size;
          break;
        case "m":
          this.m(x+posicion, y, size);
          posicion += size;
          break;
        case "n":
          this.n(x+posicion, y, size);
          posicion += size;
          break;
        case "o":
          this.o(x+posicion, y, size);
          posicion += size;
          break;
        case "p":
          this.p(x+posicion, y, size);
          posicion += size;
          break;
        case "q":
          this.q(x+posicion, y, size);
          posicion += size;
          break;
        case "r":
          this.r(x+posicion, y, size);
          posicion += size;
          break;
        case "s":
          this.s(x+posicion, y, size);
          posicion += size;
          break;
        case "t":
          this.t(x+posicion, y, size);
          posicion += size;
          break;
        case "u":
          this.u(x+posicion, y, size);
          posicion += size;
          break;
        case "v":
          this.v(x+posicion, y, size);
          posicion += size;
          break;
        case "w":
          this.w(x+posicion, y, size);
          posicion += size;
          break;
        case "x":
          this.x(x+posicion, y, size);
          posicion += size;
          break;
        case "y":
          this.y(x+posicion, y, size);
          posicion += size;
          break;
        case "z":
          this.z(x+posicion, y, size);
          posicion += size;
          break;
        case " ":
          posicion += size;
          break;
      }
    });
  }

  paint(palabra:string, size: number) {
    this.drawString(palabra, 1, 1,2);
    
  }
}




