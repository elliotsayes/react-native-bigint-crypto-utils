describe('randBetween', function () {
  const numbers = [
    {
      min: BigInt(1),
      max: BigInt(2) ** BigInt(234),
      iterations: 100,
      error: false,
      errorMax: false
    },
    {
      min: BigInt('122461641436345153'),
      max: BigInt(2) ** BigInt(234),
      iterations: 100,
      error: false,
      errorMax: false
    },
    {
      min: BigInt(-41536),
      max: BigInt(213),
      iterations: 100,
      error: false,
      errorMax: false
    },
    {
      min: BigInt('-41446134643671357134674615124613467356734646146125'),
      max: BigInt('-125246'),
      iterations: 100,
      error: false,
      errorMax: true
    },
    {
      min: BigInt(146347),
      max: BigInt(232),
      iterations: 1,
      error: true,
      errorMax: false
    },
    {
      min: BigInt(2),
      max: BigInt(2),
      iterations: 1,
      error: true,
      errorMax: false
    },
    {
      min: BigInt(1),
      max: BigInt(-1),
      iterations: 1,
      error: true,
      errorMax: true
    }
  ]
  this.timeout(90000)
  for (const num of numbers) {
    describe(`randBetween(${num.max}, ${num.min})`, function () {
      if (!num.error) {
        it(`[${num.iterations} iterations] should return x such that min <= x <= max`, function () {
          let ret = true
          for (let i = 0; i < num.iterations; i++) {
            const x = _pkg.randBetween(num.max, num.min)
            ret = ret && x >= num.min && x <= num.max
          }
          chai.expect(ret).to.equal(true)
        })
      } else {
        it('should throw RangeError (max <=0 || min <0 || min>=max)', function () {
          chai.expect(() => _pkg.randBetween(num.max, num.min)).to.throw(RangeError)
        })
      }
    })
    describe(`randBetween(${num.max})`, function () {
      if (!num.errorMax) {
        it(`[${num.iterations} iterations] should return x such that 1 <= x <= max`, function () {
          let ret = true
          for (let i = 0; i < num.iterations; i++) {
            const x = _pkg.randBetween(num.max)
            ret = ret && x >= BigInt(1) && x <= num.max
          }
          chai.expect(ret).to.equal(true)
        })
      } else {
        it('should throw RangeError (max <= min)', function () {
          chai.expect(() => _pkg.randBetween(num.max)).to.throw(RangeError)
        })
      }
    })
  }
})
