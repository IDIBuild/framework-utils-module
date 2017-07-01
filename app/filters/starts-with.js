export default function () {
    return function (input, start, csensitive) {

        var sensitive = csensitive || false;

        if(!isString(input) || isUndefined(start)) {
            return input;
        }

        input = (sensitive) ? input : input.toLowerCase();

        return !input.indexOf((sensitive) ? start : start.toLowerCase());
    }
};