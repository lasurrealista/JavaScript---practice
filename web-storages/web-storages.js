'use strict';

/* 1 */

const setCookie = (name, value, expirationDays = 1, path = '/') => {
    const now = new Date();
    now.setTime(now.getTime() + ((expirationDays * 24 * 60 * 60 * 1000) - 85500000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=${path}`;
};

setCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
console.log(document.cookie);

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

// console.log(cookieHandler.getCookie(document.cookie));
cookieHandler.saveToSessionStorage(document.cookie);

// cookieHandler.deleteCookie('token');
// cookieHandler.clearCookies(document.cookie);

/*
const cookieHandler = {
    setCookie(name, value, expirationDays = 365, path = '/') {
        const now = new Date();
        now.setTime(now.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        const expires = now.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=${path}`;
    },
    getCookie(name) {
        const keyValuePairs = document.cookie
        .split('; ')
        .find(cookie => cookie.startsWith(`${name}=`))
        return keyValuePairs ? keyValuePairs.split('=')[1] : '';
    },
    checkCookie(name) {
        const exists = cookieHandler.getCookie(name);
        return exists ? true : false;
    },
    deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
};

(function() {

    // Save a cookie with JS.
    // Example: doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT
    const saveCookie = (name, content, expireDate = new Date()) => {
        document.cookie = `${name}=${content}; expires=${expireDate}`;
    };

    const expire = new Date( new Date().getTime() + 15 * 60 * 1000 );
    // saveCookie('token', 'ldskjflkdsjf', expire);

    // Cookie handler object.
    const cookieHandler = {
        getCookie(name) {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith(name))
                .split('=')[1];
            return cookieValue;
        },
        removeCookie(name) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        },
        setSessionStorage(key, value) {
            window.sessionStorage.setItem(key, value);
        },
        moveToSession(name) {
            const value = this.getCookie(name);
            this.removeCookie(name);
            this.setSessionStorage(name, value);
        }
    };

    // cookieHandler.moveToSession('token');

})();
*/

/* 3 */

/*
   const userHandler = {
        getList() {
            return new Promise( (res, rej) => {
                if (localStorage.users) {
                    res(JSON.parse(localStorage.users));
                } else {
                    fetch('http://localhost:3000/users')
                        .then(response => res(response.json()));
                }
            });
        },
        showList(parent) {
            parent = document.querySelector(parent);
            this.getList().then(
                list => {
                    this.generateList(parent, list);
                    localStorage.users = JSON.stringify(list);
                },
                err => console.error(err)
            );
        },
        generateList(parent, list) {
            list.forEach(element => {
                const p = document.createElement('p');
                p.classList.add('user-row');
                p.textContent = `${element.firstName} ${element.lastName}`;
                parent.appendChild(p);
            });
        }
    }

    userHandler.showList('.user-list');

*/

const userHandler = {
    delay: 5,
    repeatCount: 10,
    repeatNum: 0,
    url: 'http://localhost:3000/users',
    async getList() {
        while (this.repeatNum < this.repeatCount) {
            try {
                const response = await fetch(this.url);
                const data = await response.json();
                this.repeatNum = 0;
                return data;
            } catch(e) {
                this.repeatNum++;
                await new Promise( (res) => setTimeout(res, this.delay * 1000));
                return this.getList();
            }
        }

        this.repeatNum = 0;
        alert('Az alkalmazás offline.');
        if (localStorage.users) {
            return JSON.parse(localStorage.users);
        } else {
            alert('A helyi tároló is üres.');
            return [];
        }

    },
    async showList(parent, delay, repeatCount) {
        parent = document.querySelector(parent);
        this.delay = delay;
        this.repeatCount = repeatCount;
        const list = await this.getList();
        this.generateList(parent, list);
        localStorage.users = JSON.stringify(list);
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.firstName} ${element.lastName}`;
            parent.appendChild(p);
        });
    }
};

export {
    setCookie,
    cookieHandler,
    userHandler,
}

/*

const userHandler = {
    delay: 5,
    repeatCount: 10,

    repeatNum: 1,

    getList(resolveFunc) {
        return new Promise( (res, rej) => {
            res = resolveFunc ? resolveFunc : res;
            fetch('http://localhost:8000/users')
                .then(response => res(response.json()))
                .catch(
                    function(e) {

                        if (this.repeatNum < this.repeatCount) {
                            const to = setTimeout( () => {
                            this.getList(res);
                             this.repeatNum++;
                        }, this.delay * 1000); return;
                    }
                        this.repeatNum = 1;
                        alert('Az alkalmazás offline.');
                        if (localStorage.users) {
                            res( Promise.resolve(JSON.parse(localStorage.users)));
                        } else {
                            alert('A helyi tároló is üres.')
                            res ( Promise.resolve([]));
                        }
                    }
                );
        })
    },
    showList(parent, delay, repeatCount) {
        this.delay = delay;
        this.repeatCount = repeatCount;
        parent = document.querySelector(parent);
        this.getList().then(
            list => {
                this.generateList(parent, list);
                localStorage.users = JSON.stringify(list);
            },
            err => console.error(err)
        );
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.firstName} ${element.lastName}`;
            parent.appendChild(p);
        });
    }
}

userHandler.showList('.user-list');

export {
    setCookie,
    cookieHandler,
    userHandler,
}

// 12-exception

*/
