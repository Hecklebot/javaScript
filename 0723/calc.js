var calc = {
    result:0,

    add: function (a, b) {
      result = a + b;
      document.write("<span id = 'a'>" + result +  "</span><br>");
      $('#a').css('color', 'red')
    }
    ,
    sub: function(a, b) {
      result = a - b;
      document.write(result + "<br>");
    }
    ,
    multi: function(a, b) {
      result = a * b;
      document.write(result + "<br>");
    }
    ,
    div: function(a, b){
      result = a /b;
      document.write(result + "<br>")
    }
    
  };