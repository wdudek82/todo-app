var a = 10;

function gauss(num) {
	if (num <= 1) {
		return 1
	} else {
		return num + gauss(num - 1)
	}
}

console.log(gauss(100));