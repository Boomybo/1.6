var callback = document.querySelector('.callback');
var callBackModal = document.getElementById("callBackModal");
var feedBackModal = document.getElementById("feedBackModal");

var feedBackClose = document.getElementById("feedBackClose");
var callBackClose = document.getElementById("callBackClose");


var header = document.querySelector('.header');
var bidBtn = header.querySelector('.bid-btn');
var statusBtn = header.querySelector('.status-btn');
  

let opening = function(btn, modal) {
    btn.addEventListener('click', function () {
        modal.classList.remove('callback--hidden');
    });
}

let close = function(btn, modal) {
    btn.addEventListener('click', function () {
        modal.classList.add('callback--hidden');
    });
}

opening(bidBtn, feedBackModal)
close(feedBackClose, feedBackModal)
opening(statusBtn, callBackModal)
close(callBackClose, callBackModal)



