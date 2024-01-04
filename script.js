var counter = document.getElementById("count");
  var count=0;

function add(){
    count++;
    updateCounter();
}

function reset(){
    count=0;
    updateCounter();
}

function sub(){
    count--;
    updateCounter();
}

function updateCounter(){
    var counter = document.getElementById("count");
    counter.innerHTML = count;
}