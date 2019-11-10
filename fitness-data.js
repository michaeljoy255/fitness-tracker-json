"use strict";

function createId() {
    return '_' + Math.random().toString(36).substr(2, 8);
};

function createDate() {
    return new Date();
}



//##############################################################################
var fitness_data = "";

console.log( JSON.stringify(fitness_data) ); // Used as output for the generated JSON