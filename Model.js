window.addEventListener('load',main,false);
function main()
{
	
	var ctx = canvas.getContext('2d')
	var w = canvas.width
	var h = canvas.height
     
	function init(){	
	ctx.beginPath()
	ctx.moveTo(0,300)
	ctx.lineTo(300,300)
	ctx.lineTo(0,200)
	ctx.fill()
	ctx.arc(150,300,75,0,2*Math.PI)
	ctx.moveTo(300,300)
	ctx.arc(300,300,20,0,2*Math.PI)
	ctx.moveTo(400,280)
	ctx.arc(400,280,40,0,2*Math.PI,)
	ctx.moveTo(700,300)
	ctx.lineTo(500,300)
	ctx.lineTo(500,700)
	ctx.moveTo(530,280)
	ctx.lineTo(300,280)
	ctx.moveTo(300,320)
	ctx.lineTo(400,320)
	ctx.moveTo(400,240)
	ctx.lineTo(150,225)
	ctx.moveTo(75,300)
	ctx.lineTo(75,390)
	
	ctx.stroke()
	}
	init();
	weightm.onchange=function()
		{
			some_span1.innerHTML=weightm.value;
		}
		
	weightM.onchange=function()
		{
			some_span2.innerHTML=weightM.value;
		}
		
	friction.onchange= function()
		{
			some_span3.innerHTML=friction.value;
		}
		
	
		start.onclick = function(){
		var k = 1
		var m = weightm.value
		var M = weightM.value
		var u = friction.value
		var g = 10
		var dt = 0.1
		
		var X = [6.3*w/7]
		var Y = [(2.8*h)/7]
		
		var vx = 0
		var x =0
		
		var X1 = [0.75*w/7]
		var Y1 = [(4*h)/7]
		
		var vy = 0
		var y =0
		function phys(){
			
			var x = X[X.length-1]
			
			ax=((3*m-M*u)*g)/(9*m+M)
			vx+=(-ax)*dt;
            x+=vx*dt;
			
			X.push(x);
			
			if(x<530){
					clip()
				}
				
				
			var y = Y1[Y1.length-1]
			
			ay=((9*m-3*M*u)*g)/(9*m+M)
			vy+=(ay)*dt;
            y+=vy*dt;
			
			Y1.push(y);
			
			if(y>690){
					clip()
				}
		}
		function draw(){
			ctx.clearRect(530,250,120,27.30);
			ctx.clearRect(530,279,120,20)
			ctx.beginPath();
			ctx.arc(X[X.length-1],Y[0],19,0,2*Math.PI);
            ctx.fill()
			
			ctx.clearRect(50,380,24,400);
			ctx.clearRect(76,380,15,400);
			ctx.beginPath();
            ctx.arc(X1[0],Y1[Y1.length-1],10,0,2*Math.PI);
            ctx.fill()
		}
		
		
		function line1(){
		
			ctx.beginPath();
			ctx.moveTo(530,280);
			ctx.lineTo(X[X.length-1],Y[0]);
			ctx.stroke();
			
			
		}
		function line2(){
		
			ctx.beginPath();
			ctx.moveTo(75,300);
			ctx.lineTo(X1[0],Y1[Y1.length-1]);
			ctx.stroke();
			
			
		}
		
		function drawLine(){
			var dx = 100;
			var dy = 400
			if(dx !=0){
				
				dx=dx-20;
			}	
			if(dy !=0){
				
				dy=dy+20;
			}	
			line1(dx,0);
			line2(0,dy);
			ctx.strokeStyle ="#000000"
			
			return
		}
		
	
		function control(){
				ctx.clearRect(0,0,w,h);
				init();
              if(k==1)
				{
                phys();
                draw();
				drawLine();
				} 
			}
			
            
        setInterval(control, 1000/60) 
		}
		
	
}