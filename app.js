function makeProgress() {
  var elem = document.getElementsByClassName('progress');
  for (let i = 0; i < elem.length; i++) {
    singleProgress(i, elem);
  }

  function singleProgress(i, elem) {
    console.log(i);
    console.log(elem[i]);
    var choosenElem = elem[i];
    var r = choosenElem.style.width;
    console.log(r);
    var elemWidth = Number(r.replace('%', ''));
    var width = elemWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        choosenElem.style.width = width + '%';
        console.log(r);
      }
    }
  }
}
