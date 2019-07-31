function nightDay(self){
    var target = document.querySelector('body');
     if(self.value === 'night'){
        target.style.backgroundColor='black';
        target.style.color='white';
        self.value='day';

        var alist = document.querySelectorAll('a');
        for(var i =0; i<alist.length;i++){
            alist[i].style.color="powderblue";
        }
    } else if(self.value==='day'){
        target.style.backgroundColor='white';
        target.style.color='black';
        self.value = 'night';
        
        var alist = document.querySelectorAll('a');
        for(var i =0; i<alist.length;i++){
            alist[i].style.color="red";
        }
    } 
}