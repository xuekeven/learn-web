//遍历一个节点集合设置有关元素的样式
function stripeTables() {
  var tables = document.getElementsByTagName('table');
  var odd,rows;
  for ( var i = 0; i < tables.length; i++ ) {
    odd = false;
    rows = tables[i].getElementsByTagName('tr');
    for ( var j = 0 ; j < rows.length ; j++ ) {
      if ( odd == true ) {
        addClass(rows[j],'odd');
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}
//给元素改变属性节点class值的函数
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName = ' ' + value;
    element.className = newClassName;
  }
}
addLoadEvent(stripeTables);