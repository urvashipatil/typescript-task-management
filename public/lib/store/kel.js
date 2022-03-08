export default class Kel {
    constructor(initialStore = {}) {
        this.store = initialStore;
        this.events = {};
    }
    on(eventName, cb, dep = []) {
        if (typeof cb !== "function") {
            console.error("on() method expects 2nd argument as a callback function");
            return false;
        }
        if (Object.prototype.toString.call(dep) !== "[object Array]") {
            console.error("on() method expects 3nd argument as an array");
            return false;
        }
        if (!this.events.hasOwnProperty(eventName))
            this.events[eventName] = [];
        this.events[eventName].push({ dep, cb });
        return true;
    }
    ;
    emit(eventName, payload) {
        if (typeof payload == "function")
            payload = payload(this.store);
        if (Object.prototype.toString.call(payload) !== "[object Object]") {
            console.error("Payload should be an object");
            return false;
        }
        if (!this.events.hasOwnProperty(eventName)) {
            console.error(`Event "${eventName}" does not exists`);
            return false;
        }
        this.events[eventName].forEach(({ dep, cb }) => {
            if (dep.length == 0)
                cb(this.deepFreeze(this.store));
            else {
                const t = {};
                dep.forEach(k => {
                    if (this.store.hasOwnProperty(k))
                        t[k] = this.store[k];
                });
                cb(this.deepFreeze(t));
            }
        });
    }
    deepFreeze(o) {
        Object.freeze(o);
        Object.keys(o).forEach(key => {
            if (o.hasOwnProperty(key) &&
                o[key] !== null &&
                (typeof o[key] === "object" || typeof o[key] === "function") &&
                !Object.isFrozen(o[key])) {
                this.deepFreeze(o[key]);
            }
        });
        return o;
    }
}
// export const Kel = (function () {
//   let store = {};
//   const events = {};
//   function Kel(initialStore = {}) {
//     store = initialStore;
//   }
//   Kel.prototype.on = function (eventName:string, cb:Function, dep = []) {
//     if (typeof cb !== "function") {
//       console.error("on() method expects 2nd argument as a callback function");
//       return false;
//     }
//     if (Object.prototype.toString.call(dep) !== "[object Array]") {
//       console.error("on() method expects 3nd argument as an array");
//       return false;
//     }
//     if (!this.events.hasOwnProperty(eventName)) this.events[eventName] = [];
//     this.events[eventName].push({ dep, cb });
//     return true;
//   };
//   Kel.prototype.emit = function (eventName:string, payload: Function | object) {
//     if (typeof payload == "function") payload = payload(store);
//     if (Object.prototype.toString.call(payload) !== "[object Object]") {
//       console.error("Payload should be an object");
//       return false;
//     }
//     if (!events.hasOwnProperty(eventName)) {
//       console.error(`Event "${eventName}" does not exists`);
//       return false;
//     }
//     store = { ...store, ...payload }; // shallow merge
//     this.events[eventName].forEach((dep:[], cb:Function ) => {
//       if (dep.length == 0) cb(deepFreeze(store));
//       else {
//         const t = {};
//         dep.forEach(k => {
//           if (store.hasOwnProperty(k)) t[k] = store[k];
//         });
//         cb(deepFreeze(t));
//       }
//     });
//     return true;
//   };
//   function deepFreeze(o:any) {
//     Object.freeze(o);
//     Object.keys(o).forEach(key => {
//       if (
//         o.hasOwnProperty(key) &&
//         o[key] !== null &&
//         (typeof o[key] === "object" || typeof o[key] === "function") &&
//         !Object.isFrozen(o[key])
//       ) {
//         deepFreeze(o[key]);
//       }
//     });
//     return o;
//   }
//   return Kel;
// })();
