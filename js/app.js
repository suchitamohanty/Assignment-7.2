function findSum() {
	var sum = 0;
	for(var i = 0; i < arguments.length ; i++){
		sum = sum + arguments[i];
	}
	console.log(sum);
	return sum;
}

findSum(10,15);
findSum(10,15,25);
findSum(10,15,25,45);
findSum(10,15,25,45,55);
findSum(10,15,25,45,55,898);

