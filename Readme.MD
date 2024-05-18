# @anuragkmr_45/encrypt-decrypt

@anuragkmr_45/encrypt-decrypt is a simple, lightweight library for encrypting and decrypting data using the <b>AES-256-GCM algorithm</b>. It is designed to make encryption straightforward and secure, leveraging Node.js's crypto module for robust cryptographic operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

```
npm install @anuragkmr_45/encrypt-decrypt
```

## Usage

### Importing @anuragkmr_45/encrypt-decrypt :

Import the @anuragkmr_45/encrypt-decrypt module into your project
```
import encryptDecrypt from 'encryptDecrypt';
```

### Creating an Instance :

Create an instance of @anuragkmr_45/encrypt-decrypt by providing a secret key. The secret key must be a non-empty string.

```
const secretKey = 'you-should-pick-something-strong-and-secure';

const encryptDecrypt = encryptDecrypt(secretKey);
```

### Encrypting Data
To encrypt data, use the encrypt method. It converts the input into a secure, encrypted string.

```
const data = 'Hello World !!';

const encryptedData = encryptDecrypt.encrypt(data);

console.log('Encrypted Data:', encryptedData);
```

### Decrypting Data

To decrypt data, use the decrypt method. It converts the encrypted string back to its original form.

```
const decryptedData = encryptDecrypt.decrypt(encryptedData);
console.log('Decrypted Data:', decryptedData);
```

## Example
```
import encryptDecrypt from 'encryptDecrypt';

const secretKey = 'you-should-pick-something-strong-and-secure';

const encryptDecrypt = encryptDecrypt(secretKey);

const data = 'Hello World !!';

// encrypt the data
const encryptedData = encryptDecrypt.encrypt(data);
console.log('Encrypted Data:', encryptedData);

// Decrypt the data
const decryptedData = encryptDecrypt.decrypt(encryptedData);
console.log('Decrypted Data:', decryptedData);
```

## Configuration Options

When creating a <b>encryptDecrypt instance</b> , you can provide an optional configuration object with the following properties:

<ul>
    <li>'encoding' : The encoding format for the encrypted output. Default is 'hex'.
    </li>
    <li>'saltLength' :  The length of the salt used in key derivation. Default is 64.
    </li>
    <li>'pbkdf2Iterations' :  The number of iterations for the PBKDF2 key derivation function. Default is 100000.
    </li>
</ul>

### Example with Options
```
const options = {
    encoding: 'base64',
    saltLength: 32,
    pbkdf2Iterations: 200000
};

const encryptDecrypt = encryptDecrypt(secretKey, options);
```

## Error Handling

encrypt-decrypt will throw an error in the following situations:

<ul>
    <li>If the secret key is not a non-empty string.</li>
    <li>If the value to be encrypted or decrypted is null or undefined.</li>
</ul>


## License
The MIT License (MIT)

```
The MIT License (MIT)
  
Copyright (c) 2024 Anurag Kumar
  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
  
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```