// test specific 120 case
const triArray = [];
const arrSum = arr => arr.reduce((acc,num) => acc + num, 0)
const calcNum = (num) => {
    let tempArr = [];
    let result = [];
    let i = 1;
    let breaker = 1;
    //debugger;
    while (breaker) {
        //console.log(i);
        if (num % i === 0 && num !== i) {
            tempArr.push(i);
            i++;
        } else if (i === num) {
            tempArr.push(i);
            result.push(tempArr);
            //console.log(result);
            breaker = 0;
        }else if (num % i !== 0){
        	i++;
        }else {
            console.log("something went wrong");
            breaker = 0;
        }
    }
    return result[0];
}
const triPerf = num => {
	let sum = arrSum(calcNum(num));
	if (sum === (3*num)){
		return console.log(`${num} is a Tri perfect number !`)
	}else {
		return //console.log(`${num} is not a Tri perfect number :(`)
	}
}

const genCase = () => {
	let esc = 1;
	let int = 1;
	while(int < 523776){
		triPerf(int);
		int++;
	}
	console.log(int);
}
