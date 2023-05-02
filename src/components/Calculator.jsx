import React from 'react'
import Grid from './Grid'
import { useState } from 'react'

const Calculator = () => {

    const [holdNum, setHoldNum] = useState(0)
    const [operator, setOperator] = useState('')
    const [numStr, setNumStr] = useState('0')
    const [decimal, setDecimal] = useState(false)
    const [isZero, setIsZero] = useState(true)
    const [neg, setNeg] = useState(false)

    const getInput = (id) => {

        switch(id){

            case '1':
                handleNum('1');
                break;

            case '2':
                handleNum('2');
                break;

            case '3':
                handleNum('3');
                break;

            case '4':
                handleNum('4');
                break;

            case '5':
                handleNum('5');
                break;

            case '6':
                handleNum('6');
                break;

            case '7':
                handleNum('7');
                break;

            case '8':
                handleNum('8');
                break;

            case '9':
                handleNum('9');
                break;

            case '0':
                handleNum('0');
                break;

            case 'AC':
                setNumStr('0');
                setDecimal(false);
                setIsZero(true);
                setOperator('');
                setHoldNum('0');
                setNeg(false);
                break;

            case '.':
                if(!decimal){
                    setDecimal(true);
                    setNumStr(numStr + '.');
                }
                break;
            
            case '+':
                if(!isZero){
                    if(neg){
                        setHoldNum(-1.0*parseFloat(numStr));
                    }
                    else {
                        setHoldNum(parseFloat(numStr));
                    }
                }
                setOperator('+');
                setDecimal(false);
                setNumStr('0');
                setIsZero(true);
                setNeg(false);
                break;
            
            case '-':
                if(!isZero){
                    if(neg){
                        setHoldNum(-1.0*parseFloat(numStr));
                    }
                    else {
                        setHoldNum(parseFloat(numStr));
                    }
                }
                setOperator('-');
                setDecimal(false);
                setNumStr('0');
                setIsZero(true);
                setNeg(false);
                break;

            case '/':
                if(!isZero){
                    if(neg){
                        setHoldNum(-1.0*parseFloat(numStr));
                    }
                    else {
                        setHoldNum(parseFloat(numStr));
                    }
                }
                setOperator('/');
                setDecimal(false);
                setNumStr('0');
                setIsZero(true);
                setNeg(false);
                break;

            case '*':
                if(!isZero){
                    if(neg){
                        setHoldNum(-1.0*parseFloat(numStr));
                    }
                    else {
                        setHoldNum(parseFloat(numStr));
                    }
                }
                setOperator('*');
                setDecimal(false);
                setNumStr('0');
                setIsZero(true);
                setNeg(false);
                break;

            case '=':
                handleOperation();
                setOperator('');
                setDecimal(false);
                setIsZero(true);
                setNeg(false);
                break;

            case '(-/+)':
                setNeg(!neg);
                break;

            default:
                break;
        }
    } 

    const handleOperation = () => {
        const tempNum1 = holdNum;
        const tempNum2 = neg ? -1.0*parseFloat(numStr) : parseFloat(numStr);

        switch(operator){
            case '+':
                setNumStr(0);
                setHoldNum(tempNum1 + tempNum2);
                break;
            case '-':
                setNumStr(0);
                setHoldNum(tempNum1 - tempNum2);
                break;
            case '/':
                setNumStr(0);
                setHoldNum(tempNum1 / tempNum2);
                break;
            case '*':
                setNumStr(0);
                setHoldNum(tempNum1 * tempNum2);
                break;
            default:
                break;
        }
    }

    const handleNum = (inputNum) => {
        if(isZero){
            if(!(inputNum === '0')){
                setNumStr(inputNum);
                setIsZero(false);
            }
        }
        else {
            setNumStr(numStr + inputNum);
            setIsZero(false);
        }
        
    }

    return (
        <div className='col-3 position-fixed top-50 start-50 translate-middle'>
            <div className='row'>
                <div className='bg-dark border-success rounded border border-5 col'>
                    <div className='row'>
                        <div className='text-light text-end text-success col'>{holdNum}</div>
                    </div>
                    <div className='row'>
                        <div className='text-light text-end col'>{neg ? `${operator}  -(${numStr})` : `${operator}  ${numStr}`}</div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <Grid handleClick={getInput}/>
            </div>
            
        </div>
    )
}

export default Calculator