'use strict';

/* 1 */

export const setCookie = (name, value, expirationDays = 1, path = '/') => {
    const now = new Date();
    now.setTime(now.getTime() + ((expirationDays * 24 * 60 * 60 * 1000) - 85500000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=${path}`;
};

/* 2 */

document.cookie = 'uid=354774631237; expires=Wed, 09 Dec 2020 18:00:00 UTC; path=/';
document.cookie = 'ssid=Bx55OWbHJ0Vt_IGIFÍ; expires=Wed, 09 Dec 2020 18:00:00 UTC; path=/';
document.cookie = 'viewed=5; expires=Wed, 09 Dec 2020 18:00:00 UTC; path=/';

const cookieHandler = {
    getCookie() {
        const cutString = document.cookie.replace(/; /g, '", "').replace(/=/g, '":"');
        const cutString2 = `{ "${cutString}" }`;
        return JSON.parse(cutString2);
    },
    saveToSessionStorage() {
        const cutString = document.cookie.replace(/; /g, '", "').replace(/=/g, '":"');
        const cutString2 = `{ "${cutString}" }`;
        const object = JSON.parse(cutString2);
        const entries = Object.entries(object);
        return entries.map((key, value) => sessionStorage.setItem(key, value));
    },
    deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
    clearCookies() {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++){ 
            cookieHandler.deleteCookie(document.cookie);
        };
    },
};

export default cookieHandler;

/* 3 */

const addNumbers = (a, b) => a + b;

export { 
    addNumbers as sum
};