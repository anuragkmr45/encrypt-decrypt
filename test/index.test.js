import encryptDecrypt from '../src/index.js';

// Your secret key
const secretKey = 'you-should-pick-something-strong-and-secure';

// Create a new encryptDecrypt instance
const encryptDecrypt = encryptDecrypt(secretKey);

// Data to be encrypted
const data = 'Namaskar App Sabhi Ko';

console.log('-------------------------------------------------')
console.log('Original Data')
console.log('-------------------------------------------------')
console.log(data)
// Encrypt the data

console.log()
console.log('-------------------------------------------------')
console.log('Data After Encryption and Decryption')
console.log('-------------------------------------------------')

const encryptedData = encryptDecrypt.encrypt(data);
console.log('Encrypted Data:', encryptedData);

// Decrypt the data
const decryptedData = encryptDecrypt.decrypt(encryptedData);
console.log('Decrypted Data:', decryptedData);
