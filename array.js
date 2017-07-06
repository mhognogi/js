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
