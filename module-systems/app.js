'use strict';

import { setCookie } from './module.js';

setCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
console.log(document.cookie);

import cookieHandler from './module.js';

cookieHandler.saveToSessionStorage(document.cookie);

import { sum } from './module.js';

console.log(sum(15, 60));
