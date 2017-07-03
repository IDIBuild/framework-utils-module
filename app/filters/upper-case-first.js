export default  function (input) {
    return angular.isString(input)
        ? input
            .split(' ')
            .map(function (ch) {
                return ch.charAt(0).toUpperCase() + ch.substring(1);
            })
            .join(' ')
        : input;
};