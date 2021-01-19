/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';
import env from '../config/env';

const { SECRET } = env;
/**
   * Synchronously sign the given payload into a JSON Web Token string.
   * @static
   * @param {string | number | Buffer | object} payload Payload to sign.
   * @param {string | number} expiresIn Expressed in seconds or a string describing a
   * time span. Eg: 60, "2 days", "10h", "7d". Default specified is 1day.
   * @memberof Toolbox
   * @returns {string} JWT token.
   */
export const create = (payload, expiresIn = '1d') => jwt.sign(payload, SECRET, { expiresIn });

/**
   *
   *  Synchronously verify the given JWT token using a secret
   * @param {*} token - JWT token.
   * @returns {string | number | Buffer | object } - Decoded JWT payload if
   * token is valid or an error message if otherwise.
   */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    throw new Error('Invalid Token');
  }
};
