import jump from 'jump.js/dist/jump.module';
import sal from 'sal.js';
require('./events');
sal();

/*
================================================================
                    NAV SMOOTH SCROLL CONTROLS
================================================================
*/
const home = document.getElementById('nav__control-home');
const benefits = document.getElementById('nav__control-benefits');
const wwd = document.getElementById('nav__control-wwd');
const team = document.getElementById('nav__control-team');
const pricing = document.getElementById('nav__control-pricing');
const contact = document.getElementById('nav__control-contact');

// - To Top
home.addEventListener('click', () => {
  jump('#sub-nav');
});

// - To Benefits
benefits.addEventListener('click', () => {
  jump('#main__benefits', {
    duration: 1000,
    offset: -150
  });
});

// - To What We Do
wwd.addEventListener('click', () => {
  jump('#main__WhatWeDo', {
    duration: 1000,
    offset: -50
  });
});

// - To Our Team
team.addEventListener('click', () => {
  jump('#main__ourTeam', {
    duration: 1000,
    offset: -150
  });
});

// - To Pricing
pricing.addEventListener('click', () => {
  jump('#main__pricing', {
    duration: 1000,
    offset: -150
  });
});

// - To Contact
contact.addEventListener('click', () => {
  jump('#main__contact', {
    duration: 1000,
    offset: -150
  });
});

/*
================================================================
            TRANSITION ANIMATIONS CROSS THREADED TO DOM
================================================================
*/
