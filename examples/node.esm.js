const bigintCryptoUtils = await import('../dist/esm/index.node.js')
// const bigintCryptoUtils = require('bigint-crypto-utils')

/* A BigInt with value 666 can be declared calling the bigint constructor as
BigInt('666') or with the shorter 666n.
Notice that you can also pass a number to the constructor, e.g. BigInt(666).
However, it is not recommended since values over 2**53 - 1 won't be safe but
no warning will be raised.
*/
const a = BigInt('5')
const b = BigInt('2')
const n = 19n

console.log(bigintCryptoUtils.modPow(a, b, n)) // prints 6

console.log(bigintCryptoUtils.modInv(2n, 5n)) // prints 3

console.log(bigintCryptoUtils.modInv(BigInt('3'), BigInt('5'))) // prints 2

console.log(bigintCryptoUtils.randBetween(2n ** 256n)) // Prints a cryptographically secure random number between 1 and 2**256 bits.

async function primeTesting () {
  // Output of a probable prime of 2048 bits
  console.log(await bigintCryptoUtils.prime(2048))

  // Testing if a number is a probable prime (Miller-Rabin)
  const number = 13139188972124309083000292697519085211422620620787723340749020496498012413131881656428777288953095338604061035790562501399090389032827482643578651715752317n
  const isPrime = await bigintCryptoUtils.isProbablyPrime(number)
  if (isPrime) {
    console.log(`${number} is prime`)
  } else {
    console.log(`${number} is composite`)
  }
}

primeTesting()

export {}
