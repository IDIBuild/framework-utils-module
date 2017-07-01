
export default function () {
    return function(input, chars) {

        var trim = chars || '\\s';

        return angular.isString(input)
            ? input.replace(new RegExp('^' + trim + '+|' + trim + '+$', 'g'), '')
            : input;
    }
};