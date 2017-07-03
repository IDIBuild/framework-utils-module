export default  function () {
    return function (input) {
        //todo -check
        return angular.isString(input) ? input.split(' ').map(function (ch) {
            return ch.charAt(0).toUpperCase() + ch.substring(1);}).join(' ') : input;
    };
};