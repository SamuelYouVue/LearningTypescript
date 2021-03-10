function makeArmy() {
    var shooters = []
    for (var i = 0; i < 10; i++) {
        var shooter = function () { // a shooter is a function
            console.log(i) // which should alert it's number
        }
        shooters.push(shooter)
    }
    return shooters;
}

var army = makeArmy();

army[0].apply(null);
army[5].apply(this);