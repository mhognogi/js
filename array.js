    //object to array
    //object{1:11; 2:22} to arr[11,22]
    var arrInit = [];
    Object.keys(idDiv_initiator).forEach(function(key) {
        arrInit.push(idDiv_initiator[key]);
    });
    
    //array unique arrInit -> idDiv_initiator_unique
    idDiv_initiator_unique = arrInit.filter (function (value, index, array) {
        return array.indexOf (value) == index;
    });

//intersect 2 arrays
var a = [1,2,3];
var b = [2,3,4,5];
var c = $(b).not($(b).not(a));
alert(c);
