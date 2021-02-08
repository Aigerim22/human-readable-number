module.exports = function toReadable(number) {
    var units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number == 0) return units[0];
    var str = number.toString().split("");
    for (i = 2; i < 10; i++) {
        if (number / 10 === i) {
            return tens[i - 1];
        }
    }
    if (str.length == 1) {
        for (let i = 0; i < 10; i++) {
            if (str[0] == i) {
                return units[i];
            }
        }
    } else if (str.length == 2 && number < 20) {
        for (i = 0; i < 10; i++) {
            if (str[0] == 1 && str[1] == i) {
                return units[i + 10];
            }
        }
    } else if (str.length == 2 && number >= 20) {
        for (i = 2; i < 10; i++) {
            if (str[0] == i) {
                for (k = 1; k < 10; k++) {
                    if (str[1] == k) {
                        return tens[i - 1] + " " + units[k];
                    }
                }
            }
        }
    } else if (str.length == 3) {
        for (i = 1; i < 10; i++) {
            if (str[0] == i) {
                for (j = 2; j < 10; j++) {
                    if (str[1] == j) {
                        for (k = 1; k < 10; k++) {
                            if (str[2] == k) {
                                return (
                                    units[i] +
                                    " " +
                                    "hundred" +
                                    " " +
                                    tens[j - 1] +
                                    " " +
                                    units[k]
                                );
                            } else if (str[2] == 0) {
                                return (
                                    units[i] +
                                    " " +
                                    "hundred" +
                                    " " +
                                    tens[j - 1]
                                );
                            }
                        }
                    } else if (str[1] == 1) {
                        for (k = 1; k < 10; k++) {
                            if (str[2] == k) {
                                return (
                                    units[i] +
                                    " " +
                                    "hundred" +
                                    " " +
                                    units[k + 10]
                                );
                            } else if (str[2] == 0) {
                                return (
                                    units[i] + " " + "hundred" + " " + units[10]
                                );
                            }
                        }
                    } else if (str[1] == 0) {
                        for (k = 1; k < 10; k++) {
                            if (str[2] == k) {
                                return (
                                    units[i] + " " + "hundred" + " " + units[k]
                                );
                            } else if (str[2] == 0) {
                                return units[i] + " " + "hundred";
                            }
                        }
                    }
                }
            }
        }
    }
};
