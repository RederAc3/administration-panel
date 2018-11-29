'use strict'

$(function () {
    $('.select').datepicker();
});

var loginModal = document.getElementById('container-modal-login');
var quitModal = document.getElementById('container-modal-quit');

function showModalLogin() {
    loginModal.classList.remove('opacity-on')
    loginModal.classList.add('opacity-off')

};

function closeModalLogin() {
    loginModal.classList.remove('opacity-off')
    loginModal.classList.add('opacity-on')

};

function showModalQuit() {
    quitModal.classList.remove('opacity-on')
    quitModal.classList.add('opacity-off')

};

function closeModalQuit() {
    quitModal.classList.remove('opacity-off')
    quitModal.classList.add('opacity-on')

};

document.querySelector('.account').addEventListener('click', function (event) {
    showModalLogin();
    console.log(1);
});

document.querySelector('.overlay-login').addEventListener('click', function (event) {

    closeModalLogin();
    console.log(2);
});



document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModalLogin();
        console.log(4);
    }
});


document.querySelector('.logout').addEventListener('click', function (event) {
    showModalQuit();
    console.log(5);
});

document.querySelector('.overlay-quit').addEventListener('click', function (event) {

    closeModalQuit();
    console.log(2);
});

document.querySelector('.button-cancel').addEventListener('click', function (event) {

    closeModalQuit();
    console.log(2);
});

document.querySelector('.button-quit').addEventListener('click', function (event) {

    closeModalQuit();
    showModalLogin();
    console.log(2);
});

document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModalQuit();
        console.log(6);
    }
});

//##############################-SIDEBAR-################################

var sidebar = document.querySelector('.sidebar');
var hamburger = document.querySelector('.hamburger');
var main = document.querySelector('.main');
var score = 0;

function closeSidebar() {
    sidebar.classList.add('hidden-sidebar')
    sidebar.classList.remove('col-2')
    hamburger.classList.remove('close-hamburger')
    hamburger.classList.remove('close')
    main.classList.add('margin-none')
    hamburger.classList.remove('hamburger-translate')

};

function openSidebar() {
    sidebar.classList.remove('hidden-sidebar')
    sidebar.classList.add('col-2')
    hamburger.classList.add('close-hamburger')
    hamburger.classList.add('close')
    main.classList.remove('margin-none')
    hamburger.classList.add('hamburger-translate')

};

hamburger.addEventListener('click', function (event) {

    if (score % 2) {
        openSidebar();
        console.log(score);
        score++;

    } else {
        closeSidebar();
        console.log(score);
        score++;
    }
});


//###########################--WYKRES--##################################


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {


    type: 'bar',
    data: {

        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],

        datasets: [{
                label: "Signups",
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
        },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
                hidden: true,
        }]
    },

    options: {
        labels: {
            //            padding: 20,
            //            fontColor: '#fff',
            //        },
            legend: {
                display: true,
                //            onClick: {
                //              backgroundColor: '#e3e3e3',  
                //            }
            }
        },
        ticks: {
            fontSize: '30px',
        },
    },
});
