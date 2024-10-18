var reformatNumber = function(number) {
    let cleanedStr = number.replace(/[ -]/g, "").split("");
   cleanedStr = formating(cleanedStr)
   console.log(cleanedStr.replace(/,/g, ""))
};

function formating(cleanedStr) {
    let length = cleanedStr.length
    if(length == 0) {
        return "";
    }
    if(length > 4) {
        cleanedStr.splice(3, 0, "-") 
    }  else if (length === 4) {
        cleanedStr.splice(2, 0, "-");
    }
    let phNumber;
    return phNumber = cleanedStr + formating(cleanedStr.splice(4))
}

reformatNumber("1-23 45-678-9-1011")