import { useState } from "react";


const firstlevel = [
    {
        key: 1,
        name: "AC"
    },
    {
        key: 2,
        name: "+/-"
    },
    {
        key: 3,
        name: "%"
    },
    {
        key: 4,
        name: "/"
    }
]

    const secondlevel = [
        {
            key: 1,
            name: "7"
        },
        {
            key: 2,
            name: "8"
        },
        {
            key: 3,
            name: "9"
        },
        {
            key: 4,
            name: "x"
        }
    ]

    const thirdlevel = [
        {
            key: 1,
            name: "4"
        },
        {
            key: 2,
            name: "5"
        }, {
            key: 3,
            name: "6"
        },
        {
            key: 4,
            name: "-"
        } 
    ]

    const fourthlevel = [
        {
            key: 1,
            name: "1"
        },
        {
            key: 2,
            name: "2"
        },
        {
            key: 3,
            name: "3"
        },
        {
            key: 4,
            name: "+"
        }
    ]

    const fifthlevel = [
        {
            key: 1,
            name: "0"
        },
        {
            key: 2,
            name: ","
        },
        {
            key: 3,
            name: "="
        }
    ]

const Main = ()=> {


    const operators = ["+", "-", "*", "/"]

    
    const [window, setWindow] = useState("0")
    const [display, setDisplay] = useState("")

    const handleDisplay = (value) => {
        setDisplay(display + value)
        console.log("done")    
    }

    const clear = () => {
        setDisplay("")
    }

    const calculate = () => {
        setDisplay(eval(display).toString())
    }

    return (
        <>
    
            <div className="title">IOS Calculator</div>
            <div className="wrapper">
                <div className="window">{display || "0"}</div>
               <div className="firstLevel">

                    <div className="delete" onClick={clear}>
                        AC
                    </div>
                    <div className="negativeValue">
                        +/-
                    </div>
                    <div className="percent">
                        %
                    </div>
                    <div className="division" onClick={()=> handleDisplay("/")}>
                        /
                    </div>
                </div>
                
                <div className="secondLevel">

                    <div className="seven" onClick={()=> handleDisplay("7")}>
                        7
                    </div>
                    <div className="eight" onClick={()=> handleDisplay("8")}>
                        8
                    </div>
                    <div className="nine" onClick={()=> handleDisplay("9")}>
                        9
                    </div>
                    <div className="multiplication" onClick={()=> handleDisplay("*")}>
                        ×
                    </div>
                </div>

                <div className="thirdLevel">

                    <div className="four" onClick={()=> handleDisplay("4")}>
                        4
                    </div>
                    <div className="five" onClick={()=> handleDisplay("5")}>
                        5
                    </div>
                    <div className="six" onClick={()=> handleDisplay("6")}>
                        6
                    </div>
                    <div className="minus" onClick={()=> handleDisplay("-")}>
                        -
                    </div>
                </div>

                <div className="fourthLevel">

                    <div className="one" onClick={()=> handleDisplay("1")}>
                        1
                    </div>
                    <div className="two" onClick={()=> handleDisplay("2")}>
                        2
                    </div>
                    <div className="three" onClick={()=> handleDisplay("3")}>
                        3
                    </div>
                    <div className="plus" onClick={()=> handleDisplay("+")}>
                        +
                    </div>
                </div>

                <div className="fifthLevel">

                    <div className="zero" onClick={()=> handleDisplay("0")}>
                        0
                    </div>
                    <div className="comma" onClick={()=> handleDisplay(",")}>
                        ,
                    </div>
                    <div className="equal" onClick={calculate}>
                        =
                    </div>
                    
                </div>

            </div>



            <div className="title">IOS Calculator</div>
            <div className="wrap">

            <div className="window2"></div>  

            <div value={handleDisplay} className="firstlevel" onClick={()=>handleDisplay(firstlevel.name)}>
                {firstlevel.map((index)=> (
                    <div key={index.key} className="circle1">
                        {index.name}
                    </div> 
                ))}
           </div>
            
            <div className="secondlevel">
                {secondlevel.map((index)=> (
                    <div key={index.key} className="circle2">
                        {index.name}
                    </div>
                ))}
            </div>

            
            <div className="thirdlevel">
                {thirdlevel.map((index)=> (
                    <div key={index.key} className="circle3">
                        {index.name}
                    </div> 
                ))}
           </div>

           
           <div className="fourthlevel">
                {fourthlevel.map((index)=> (
                    <div key={index.key} className="circle4">
                        {index.name}
                    </div> 
                ))}
           </div>

           
           <div className="fifthlevel">
                {fifthlevel.map((index)=> (
                    <div key={index.key} className="circle5">
                        {index.name}
                    </div> 
                ))}
           </div>

            </div>
        </>
    )
}

export default Main;