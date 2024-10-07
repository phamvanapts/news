'use strict'
// alert("Test Storage.js");

const saveToStorage = function (key, value){
    localStorage.setItem(key, JSON.stringify(value));
};
const getFromStorage = function(key){
return JSON.parse(localStorage.getItem(key));
};