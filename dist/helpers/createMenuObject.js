"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let objects = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };
    if (activeMenu !== "") {
        objects[activeMenu] = true;
    }
    return objects;
};
exports.createMenuObject = createMenuObject;
