import { Button } from 'react-bootstrap'
import React from 'react'

const Grid = ({ handleClick }) => {
    const buttonStyle = 'rounded-pill p-3 border-success text-center border mb-2 mt-2'

    return (
        <div className="container bg-gray rounded border border-success border-5 p-3">
            <div className='row'>
                <div className='col-md-9'>
                    <div className="row">
                        <Button onClick={() => handleClick("AC")} className={`col-md-8 bg-danger ${buttonStyle}`}>AC</Button>
                        <Button onClick={() => handleClick("(-/+)")} className={`col-md-4 bg-warning ${buttonStyle}`}>(-/+)</Button>
                    </div>
                    <div className="row">
                        <Button onClick={() => handleClick("7")} className={`bg-dark col-md-4  ${buttonStyle}`}>7</Button>
                        <Button onClick={() => handleClick("8")} className={`bg-dark col-md-4 ${buttonStyle}`}>8</Button>
                        <Button onClick={() => handleClick("9")} className={`bg-dark col-md-4 ${buttonStyle}`}>9</Button>
                    </div>
                    <div className="row">
                        <Button onClick={() => handleClick("4")} className={`bg-dark col-md-4 ${buttonStyle}`}>4</Button>
                        <Button onClick={() => handleClick("5")} className={`bg-dark col-md-4 ${buttonStyle}`}>5</Button>
                        <Button onClick={() => handleClick("6")} className={`bg-dark col-md-4 ${buttonStyle}`}>6</Button>
                    </div>
                    <div className="row">
                        <Button onClick={() => handleClick("3")} className={`bg-dark col-md-4 ${buttonStyle}`}>3</Button>
                        <Button onClick={() => handleClick("2")} className={`bg-dark col-md-4 ${buttonStyle}`}>2</Button>
                        <Button onClick={() => handleClick("1")} className={`bg-dark col-md-4 ${buttonStyle}`}>1</Button>
                    </div>
                    <div className="row">
                        <Button onClick={() => handleClick("0")} className={`bg-dark col-md-8 ${buttonStyle}`}>0</Button>
                        <Button onClick={() => handleClick(".")} className={`bg-dark col-md-4 ${buttonStyle}`}>.</Button>
                    </div>
                </div>
                <div className='text-center col-md-3'>
                    <div className="row">
                        <Button onClick={() => handleClick("/")} className={`bg-primary col-md-12 ${buttonStyle}`}>/</Button>
                    </div>
                    <div className="row">
                        <Button onClick={() => handleClick("*")} className={`bg-primary col-md-12 ${buttonStyle}`}>X</Button>
                    </div>
                    <div className="row">
                        <Button onClick={() => handleClick("+")} className={`bg-primary col-md-12 ${buttonStyle}`}>+</Button>
                    </div>
                    <div className="row">
                        <Button onClick={() => handleClick("-")} className={`bg-primary col-md-12 ${buttonStyle}`}>-</Button>
                    </div>
                    <div className='row'>
                        <Button onClick={() => handleClick("=")} className={`bg-info col-md-12 ${buttonStyle}`}>=</Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Grid