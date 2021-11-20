let UIN = "0356043010119111100023005"
UIN.length == 20 || UIN.length == 25

if(UIN.length == 20){
   let kbk = UIN.slice(0,2)
   let number = UIN.slice(3,18)
   let control = UIN.slice(19)
    if(!control){
        let sum = 0
        let weight = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
        for (let i = 0;i < number.length;i++){
        sum = sum + (number[i] *  weight[i])
        }
        control = sum % 11
        if(control >= 10 ){
            weight.slice(0,1)
            for (let i = 0;i < number.length;i++){
        sum = sum + (number[i] *  weight[i])
        }
        if(control >= 10){
            control = 0
        }
    }
}
}else if (UIN.length == 25){
    let URN = UIN.slice(0,7) 
    // translate from hexadecimal to decimal,if length < 8 ,then add missing until will not reach 8
    let number = UIN.slice(8,23)
    let control = UIN.slice(24)
    if(!control){
        let sum = 0
        let weight = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
        for (let i = 0;i < number.length;i++){
        sum = sum + (number[i] *  weight[i])
        }
        control = sum % 11
        if(control >= 10 ){
            weight.slice(0,1)
            for (let i = 0;i < number.length;i++){
        sum = sum + (number[i] *  weight[i])
        }
        if(control >= 10){
            control = 0
        }
    }
}
}