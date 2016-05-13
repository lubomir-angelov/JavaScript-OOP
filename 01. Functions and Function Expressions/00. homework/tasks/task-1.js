/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

		function sumArr(arr){
   			var sum = 0;
   			if(arr.length === 0){
   				return null;
			}
			if(typeof array === 'undeifned'){
   				throw "Error, array is undefined.";
			}
		for(var i = 0; i < arr.length; i++ ){
    		if(!Number(arr[i])){
        		throw "Element is not convertible to Number";
		}
		sum += Number(arr[i]);
   	}
}

module.exports = sumArr;