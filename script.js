window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours.warszawa');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes.warszawa');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds.warszawa');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours.berlin');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes.berlin');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds.berlin');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours.chicago');
    hours.style.transform = `rotate(${date.getHours()-2 / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes.chicago');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds.chicago');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours.harbin');
    hours.style.transform = `rotate(${date.getHours()-1 / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes.harbin');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds.harbin');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours.londyn');
    hours.style.transform = `rotate(${date.getHours()+4 / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes.londyn');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds.londyn');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);