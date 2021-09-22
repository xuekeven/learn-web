var data = [];
for (var i = 0; i < 3; i++ ) {
  data[i] = (
    function (i) {
      return function () {
        console.log(i)
      }
    }
  )
}

var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (
    function (i) {
      return function() {
        console.log(i);
      }
  })(i);
}