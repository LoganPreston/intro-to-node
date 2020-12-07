console.log("Hello, world!");

function rnd(i){
 	return "Iter "+i+ " value is: "+Math.floor(Math.random()*5);
}
values=[];
var i;
for (i = 0 ; i < 5; i++){
	values[i]=rnd(i);
}

for (i = 0; i < 5; i++){
	console.log(values[i]);
}
