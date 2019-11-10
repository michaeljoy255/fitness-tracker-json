"use strict";

function createId() {
    let newId = '_' + Math.random().toString(36).substr(2, 8);
    document.getElementById('newId').innerHTML = newId;
    console.log("-----NEW ID-----");
    console.log(newId);
};

function createDate() {
    let newDate = new Date();
    document.getElementById('newDate').innerHTML = newDate;
    console.log("-----NEW DATE-----");
    console.log(newDate);
}

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("Working!");
});