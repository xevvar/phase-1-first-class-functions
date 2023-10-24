function receivesAFunction(aFunction) {
    aFunction();

}


function returnsANamedFunction() {
    function namedFunction() {
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}