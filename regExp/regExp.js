'use strict';

/* 1 */ 

const validateVisaCardNumber = {
    cardNumber: /^4[0-9]{12}(?:[0-9]{3})?$/,
    cardNumberValidator(text) {
        return text.match(this.cardNumber) ? true : false;
    }
};

console.log(validateVisaCardNumber
    .cardNumberValidator('4234567890123456', 'cardNumber'));

/* 2 */ 

const validateIpAddress = {
    ipAddress: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
    ipAddressValidator(text) {
        return text.match(this.ipAddress) ? true : false;
    }
};

console.log(validateIpAddress
    .ipAddressValidator('255.106.138.55', 'ipAddress'));

/* 3 */ 

const validateMacAddress = {
    macAddress: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    macAddressValidator(text) {
        return text.match(this.macAddress) ? true : false;
    }
};

console.log(validateMacAddress
    .macAddressValidator('a1:23:45:6f:89:AB', 'macAddress'));

/* 4 */ 

const validator = {

    rules: {
        cardNumber: /^4[0-9]{12}(?:[0-9]{3})?$/,
        ipAddress: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
        macAddress: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    },

    validate(text, type) {
        return text.match(this.rules[type]) ? true : false;
    },
};

console.log(validator
    .validate('1234567890123456', 'cardNumber'));

console.log(validator
    .validate('256.106.138.55', 'ipAddress'));

console.log(validator
    .validate('a1:2G:45:6f:89:AB', 'macAddress'));
