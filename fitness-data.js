"use strict";

function createId() {
    return '_' + Math.random().toString(36).substr(2, 8);
};

function createDate() {
    return new Date();
}