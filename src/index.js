module.exports = function check(str, bracketsConfig) {
    let pairsBrackets = [];
    let result = null;

   bracketsConfig.forEach((item) => {
       pairsBrackets.push(item.join(''))
   });

    const  getResult = (pairsBrackets, str, count = 0) => {

        if(str.indexOf(pairsBrackets[count] ) !== -1){
            str = str.replace(pairsBrackets[count], "");
            return getResult(pairsBrackets, str, count = 0)
        }else if(count < pairsBrackets.length){
            count ++
            return getResult(pairsBrackets, str, count)
        }

        return  (str) ? result = false : result = true;
    }
    return  getResult(pairsBrackets, str);
}

