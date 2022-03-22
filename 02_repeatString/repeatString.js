const repeatString = function(string, amount) {
    if (amount<0) {
        return "ERROR"
    }

    let out = ""
    for (let i = 0; i < amount; i++) {
        out += string
    }
    return out
};

// Do not edit below this line
module.exports = repeatString;



//set vscode escape
