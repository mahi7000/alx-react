import $ from 'jquery';

$(document).ready(() => {
    $('body').prepend('<header><img src="../../assets/holberton_logo.jpg" alt="Holberton Logo" /><h1>Holberton Dashboard</h1></header>');
    console.log("Init header");
});