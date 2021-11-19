import { useEffect,useState,useRef } from "react"
import axios from 'axios'
import example1 from '../mock/fine-example.json'
import { Spinner } from "./spinner"
import { NotFound } from "./notFound"
import { LogoSVG } from './logoSVG';
import { AnswerForm } from "./answerForm"

export const FindForm = () => {
    const FETCH_URL = process.env.NEXT_PUBLIC_FETCH_URL
    const [findUIN,setFindUIN] = useState('')
    const [dataOutput, setDataOutput] =  useState({})
    const inputRef  = useRef()
    const [isLoading,setIsLoading] = useState(false)
    const [empty,setEmpty] = useState(true)
    console.log('process.env.NEXT_PUBLIC_FETCH_URL',process.env.NEXT_PUBLIC_FETCH_URL)
    
    const findByUIN = async () => {
        setIsLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/${findUIN}`)
        const data = await response.json()
        setIsLoading(false)
        setDataOutput(example1)
        setEmpty(false)
       
    }

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
            <input ref={inputRef} type="number" placeholder="Введите УИН" className="find__input" value={findUIN}  onChange={(e) => setFindUIN(e.target.value) }></input>
            <button className="find__button" onClick={findByUIN}>Найти</button>
            </div>
            {isLoading ? <Spinner /> : <></>}
            {(dataOutput && !empty) ? <NotFound UIN={findUIN}/> : <AnswerForm data={dataOutput} UIN={findUIN} />}

            {/* <Spinner />
            <NotFound UIN={findUIN}/> */}
            {/* <AnswerForm data={dataOutput} UIN={findUIN}/> */}
        </div>
        </>
    )
}