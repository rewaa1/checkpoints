document.getElementById("card1a").onclick = function() {
    adding()
};
document.getElementById("card2a").onclick = function() {
    adding2()
};
document.getElementById("card3a").onclick = function() {
    adding3()
};
document.getElementById("card1d").onclick = function() {
    removing()
};
document.getElementById("card2d").onclick = function() {
    removing2()
};
document.getElementById("card3d").onclick = function() {
    removing3()
};
document.getElementById("remove").onclick = function() {
    clearcart()
};
var totalprice = 0 ;
var quantity = 0;
function removing(){
   
    var qua = 1; 
    var price = 250;
    if(quantity > 0)
    {
        quantity -= qua;
        if(totalprice > 0)
        {
            totalprice -= price ; 
        }
        
    }
    document.getElementById("quat").innerHTML=(quantity); 
    document.getElementById("total").innerHTML=(totalprice);    
}
function removing2(){
    var qua = 1; 
    var price = 200;
    if(quantity > 0)
    {
        quantity -= qua;
        if(totalprice > 0)
        {
            totalprice -= price ; 
        }
        
    }
    document.getElementById("quat").innerHTML=(quantity); 
    document.getElementById("total").innerHTML=(totalprice);        
}
function removing3(){
    var qua = 1; 
    var price = 150;    
    if(quantity > 0)
    {
        quantity -= qua;
        if(totalprice > 0)
        {
            totalprice -= price ; 
        }
        
    }
    document.getElementById("quat").innerHTML=(quantity); 
    document.getElementById("total").innerHTML=(totalprice);        
}

function adding(){
    var qua = 1;
    var price = 250;
    quantity += qua;
    totalprice += price ;
    document.getElementById("quat").innerHTML=(quantity);
    document.getElementById("total").innerHTML=(totalprice);    
}
function adding2(){
    var qua = 1;
    var price = 200;
    quantity += qua;
    totalprice += price ;
    document.getElementById("quat").innerHTML=(quantity);
    document.getElementById("total").innerHTML=(totalprice);    
}
function adding3(){
    var qua = 1;    
    var price = 150;
    quantity += qua;
    totalprice += price ;
    document.getElementById("quat").innerHTML=(quantity);
    document.getElementById("total").innerHTML=(totalprice);    
}
function clearcart(){
    var totalprice = 0 ;
    var quantity = 0;
    document.getElementById("quat").innerHTML=(quantity);
    document.getElementById("total").innerHTML=(totalprice); 
}
