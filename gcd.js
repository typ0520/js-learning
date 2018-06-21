function gcd(a, b) {
	while (a != 0) {
		const temp = b % a
		b = a
		a = temp
	}
	return b
}

console.log(gcd(999, 999))
console.log(gcd(1997, 615))
console.log(gcd(615, 1997))