5 Требования к формированию идентификаторов, используемых при предоставлении и получении информации
Уникальный идентификатор начисления
УИН состоит из 20 или 25 символов. Структура УИН должна соответствовать требованиям, приведенным в настоящем разделе.
5.1.1Структура УИН для АН и ГАН, являющихся федеральными органами государственной власти, для государственных внебюджетных фондов
1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20
A	B	C

А	Код главы КБК.
В	Уникальный номер начисления – 16 цифр. Алгоритм формирования, обеспечивающий уникальность номера, определяется участником самостоятельно. При этом уникальный номер начисления формируется так, чтобы 20 цифр УИН 
не совпадали с КБК того же начисления.
С	Контрольный разряд. Алгоритм расчета представлен в подпункте 5.1.3
5.1.2Структура УИН для АН и ГАН, являющихся органами государственной власти субъектов Российской Федерации, органами местного самоуправления, государственными (муниципальными) учреждениями, для Банка России.
1	2	3	4	5	6	7	8	9	10	11	12	13	14	…	24	25
A	B	C

A	УРН участника, сформировавшего начисление.
УРН указывается в десятичном представлении. Для этого его необходимо предварительно перевести из шестнадцатеричного представления и десятичное.
Например,
УРН участника равен значению «aa11b4»; после перевода в десятичное представление получается «11145652». Если при переводе УРН участника в десятичное представление получается менее восьми символов, то значение дополняется нулями слева до 8 цифр.
B	Уникальный номер начисления – 16 цифр.
Алгоритм формирования, обеспечивающий уникальность номера, определяется участником самостоятельно.
C	Контрольный разряд. Алгоритм расчета описан в разделе 5.1.3.
5.1.3Правила расчета контрольного разряда УИН
Контрольный разряд УИН формируется по следующим правилам:
­каждому разряду УИН, начиная со старшего разряда, присваивается набор весов, соответствующий натуральному ряду чисел от 1 до 10, далее набор весов повторяется;
­каждая цифра УИН умножается на присвоенный вес разряда 
и вычисляется сумма полученных произведений; 
­контрольный разряд для УИН представляет собой остаток 
от деления полученной суммы на модуль «11». Контрольный разряд должен иметь значение от 0 до 9;
­если получается остаток, равный 10, то для обеспечения одноразрядного контрольного разряда необходимо провести повторный расчет, применяя вторую последовательность весов, являющуюся результатом циклического сдвига исходной последовательности на два разряда влево (3, 4, 5, 6, 7, 8, 9, 10, 1, 2). Если, в случае повторного расчета, остаток от деления вновь сохраняется равным 10, то значение контрольного разряда проставляется равным «0».

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