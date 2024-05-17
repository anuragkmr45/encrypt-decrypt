import crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const ivLength = 16;
const tagLength = 16;
const defaultEncoding = 'hex';
const defaultSaltLength = 64;
const defaultPbkdf2Iterations = 100000;

export default {
    crypto,
    algorithm,
    ivLength,
    tagLength,
    defaultEncoding,
    defaultSaltLength,
    defaultPbkdf2Iterations,
};
