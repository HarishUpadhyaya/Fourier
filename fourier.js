
class Complex {
	constructor(a,b) {
		this.re = a;
		this.im = b;
	}

	add(c) {
		this.re += c.re;
		this.im += c.im;
	}

	mult(c) {
		let re = this.re * c.re - this.im * c.im;
		let im = this.re * c.im + this.im * c.re;
		let z = new Complex(re,im);
		return z; 
	}

	scalar_mult(m) {
		this.re = this.re * m;
		this.im = this.im * m;
	}

	mag() {
		let x = sqrt(this.re * this.re + this.im * this.im);
		return x;
	}

}


function dft(x) {
	const X = [];
	const N = x.length; 

	for (let k = 0; k < N; k++) {
		let sum = new Complex(0,0);
		for (let n = 0; n < N; n++) {
			let phi = 2 * (PI / N) * k * n; 
			let c = new Complex(cos(phi), -1 * sin(phi)); 
			sum.add(x[n].mult(c));
		}
		sum.scalar_mult(1/N);

		let freq = k; 
		let amp = sum.mag();
		let phase = atan2(sum.im, sum.re);

		X[k] = { re: sum.re, im: sum.im, freq, amp, phase}

	}

	return X; 
}