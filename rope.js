class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
////
//			pointA: {x: 200, y: 20},
//			bodyB: bob1,
//			pointB: {x: 0, y: 0},
//			length: 200, 
//			stiffness: 0.1,
		
//			pointB: {x:0, y:0},
			
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y) 
		
	}
}