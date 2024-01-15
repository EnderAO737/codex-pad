function pad(string, char, side, num){
    if(side == 'left'){
        return char.repeat(num) + string;
    }
    else if(side == 'right'){
        return string + char.repeat(num);
    }
    else {
        return char.repeat(num) + string + char.repeat(num);
    }
}

module.exports = pad;