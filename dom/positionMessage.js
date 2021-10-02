//设置位置信息
function positionMessage() {
  if (!document.getElementById('message')) return false;

  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  moveElement('message',200,500,20)
}

addLoadEvent(positionMessage);