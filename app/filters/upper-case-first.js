export default  function () {
    return function (input) {
        return angular.isString(input) ? input.split(' ').map(function (ch) {
            return ch.charAt(1).toUpperCase() + ch.substring(1);}).join(' ') : input;
    };
};