/* SETUP */
var lockButtons = false;

$("#green").mousedown(buttonMouseDown);
$("#red").mousedown(buttonMouseDown);
$("#yellow").mousedown(buttonMouseDown);
$("#blue").mousedown(buttonMouseDown);
$("#green").mouseup(buttonMouseUp);
$("#red").mouseup(buttonMouseUp);
$("#yellow").mouseup(buttonMouseUp);
$("#blue").mouseup(buttonMouseUp);

$("#switch").click(function(){
  $("#innerSwitch").toggleClass("enabled");
  $("#display").toggleClass("enabled");
  
  if($("#display").hasClass("enabled")){
    turnOn();
  } else {
    turnOff();
  }
});

function isEnabled(){
  return $("#display").hasClass("enabled");
}

function setDisplay(str){
  $("#display").text(isEnabled() ? str : "");
}

function turnOn(){
  setDisplay("--");
  setTimeout(function(){
    setDisplay("---");
    setTimeout(function(){
      setDisplay("----");
      setTimeout(function(){
        setDisplay("");
        setTimeout(function(){
          setDisplay("----");
          setTimeout(function(){
            setDisplay("");
            setTimeout(function(){
              setDisplay("0");
              simon();
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  }, 200);
}

function turnOff(){
  setDisplay("");
}

function buttonMouseDown(){
  if(lockButtons || !isEnabled()) return;
  $(this).addClass("highlight");
}
function buttonMouseUp(){
  $(this).removeClass("highlight");
}

var algo = [];
function simon(){
  
}