import { useEffect,useState,useRef } from "react"
import axios from 'axios'
import example1 from '../mock/fine-example.json'
import { Spinner } from "./spinner"
import { NotFound } from "./notFound"
import { LogoSVG } from './logoSVG';
import { AnswerForm } from "./answerForm"
import {UIN,data} from '../types/types'

export const FindForm = () => {
    const FETCH_URL = process.env.NEXT_PUBLIC_FETCH_URL
    const [findUIN,setFindUIN] = useState<any | undefined>('')
    const [UINValid ,setUINValid] = useState(true)
    const [validLength,setValidLength] = useState(false)
    const [dataOutput, setDataOutput] =  useState <any | undefined>()
    const inputRef  = useRef<any | undefined>()
    const [isLoading,setIsLoading] = useState(false)
    const [empty,setEmpty] = useState(true)
    console.log('process.env.NEXT_PUBLIC_FETCH_URL',process.env.NEXT_PUBLIC_FETCH_URL)
    console.log('findUIN', findUIN)
    
    const findByUIN = async () => {
        setIsLoading(true)
        // const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/${findUIN}`)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}fines/0356043010119111100023005`)
        const data = await response.json()
        setIsLoading(false)
        setDataOutput(data)
        console.log('response',response)
        setEmpty(false)
       
    }

    const onlyNumbers = (val:any) : void => {
        setFindUIN(val)
        
        const  regex = /^[0-9]+$/
        if (!regex.test(val)){
            setUINValid(false)
        }else{
            setUINValid(true)
        }
        
        if(!(val.length < 16) && !(val.length > 25) && !(val.length == 0)){
            setValidLength(true)
        }else{
            setValidLength(false)
        }
    }
    console.log('UINValid',UINValid)
    console.log('!!onlyNumbers',!!onlyNumbers )
    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value = ''
        console.log('inputRef',inputRef)
      }, []);

    return (
        <>  
        <div className="container">
        <LogoSVG/>
            <h1 className="logo-text"><span>Штрафов</span> Нет</h1>
            <h3 className="find-description">Получение информации о штрафе по УИН</h3>
            <div >
            <input ref={inputRef} type="text" placeholder="Введите УИН" className="find__input" value={findUIN}  onChange={(e) => onlyNumbers(e.target.value) }></input>
            <button disabled={!validLength || !UINValid } className="find__button" onClick={findByUIN}>Найти</button>

            {validLength ? <></> : <div className="error-text">Введите от 16 до 25 символов</div>}
            {UINValid ? <></> : <div className="error-text">Вводите только цифры</div>}
            </div>
            {isLoading ? <Spinner /> : <></>}
            {(!dataOutput && !empty) ? <NotFound UIN={findUIN}/> : <></>}
            {(dataOutput && !empty) ? <AnswerForm data={dataOutput} UIN={findUIN}/>  : <></>}

            {/* <Spinner />
            <NotFound UIN={findUIN}/> */}
            {/* <AnswerForm data={dataOutput} UIN={findUIN}/> */}

        </div>
        </>
    )
}