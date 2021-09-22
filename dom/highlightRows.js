//在事件发生时设置有关元素的样式的函数
function highlightRows() {

    if (!document.getElementsByTagName) return false;

    var rows =document.getElementsByTagName('tr');
    for ( var i = 0; i < rows.length; i++ ) {
        rows[i].onmousemove = function() {
            this.style.fontWeight = 'bold';
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = 'normal';
        }
    }
}

addLoadEvent(highlightRows);