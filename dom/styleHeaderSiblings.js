//根据元素在节点树里的位置来设置样式 
function styleHeaderSiblings() {
  if (!document.getElementsByTagName) return false;
  var elem;
  var headers = document.getElementsByTagName("h1");
  for (var i=0; i<headers.length; i++) {
    elem = getNextElement(headers[i].nextSibling);
    elem.style.fontWeight = 'bold';
  }
}
//判断下一个节点是不是元素节点，并直到找出元素节点
function getNextElement(node) {
  if (node.nodeType == 1) return node;
  if (node.nextSibling) return getNextElement(node.nextSibling);
  return null;
}
addLoadEvent(styleHeaderSiblings);