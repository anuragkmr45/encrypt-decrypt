import constants from './constants.js';

const {
    crypto,
    algorithm,
    ivLength,
    tagLength,
    defaultEncoding,
    defaultSaltLength,
    defaultPbkdf2Iterations
} = constants;

const Cryptr = (secret, options = {}) => {
    if (!secret || typeof secret !== 'string') {
        throw new Error('Cryptr: secret must be a non-empty string');
    }

    const {
        encoding = defaultEncoding,
        saltLength = defaultSaltLength,
        pbkdf2Iterations = defaultPbkdf2Iterations
    } = options;

    const tagPosition = saltLength + ivLength;
    const encryptedPosition = tagPosition + tagLength;

    const deriveKey = (salt) => {
        return crypto.pbkdf2Sync(secret, salt, pbkdf2Iterations, 32, 'sha512');
    };

    const encrypt = (value) => {
        if (value == null) {
            throw new Error('Cryptr: value must not be null or undefined');
        }

        const iv = crypto.randomBytes(ivLength);
        const salt = crypto.randomBytes(saltLength);
        const key = deriveKey(salt);

        const cipher = crypto.createCipheriv(algorithm, key, iv);
        const encrypted = Buffer.concat([cipher.update(String(value), 'utf8'), cipher.final()]);
        const tag = cipher.getAuthTag();

        return Buffer.concat([salt, iv, tag, encrypted]).toString(encoding);
    };

    const decrypt = (value) => {
        if (value == null) {
            throw new Error('Cryptr: value must not be null or undefined');
        }

        const bufferValue = Buffer.from(String(value), encoding);
        const salt = bufferValue.slice(0, saltLength);
        const iv = bufferValue.slice(saltLength, tagPosition);
        const tag = bufferValue.slice(tagPosition, encryptedPosition);
        const encrypted = bufferValue.slice(encryptedPosition);

        const key = deriveKey(salt);
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        decipher.setAuthTag(tag);

        return decipher.update(encrypted) + decipher.final('utf8');
    };

    return {
        encrypt,
        decrypt
    };
};

export default Cryptr;
