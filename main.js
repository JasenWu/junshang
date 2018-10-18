window.onload = function () {
  var toggleBar = document.getElementById("toggleBar");
  var toggle = function () {
    var leftMenu = document.getElementById("leftMenu");
    var classNames = leftMenu.className;
    if (classNames.indexOf('hide') !== -1) {
      leftMenu.className = "left ";
    } else {
      leftMenu.className = "left hide";
    }
  }

  toggleBar.onclick = toggle;
  
}