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

    
    const [window, setWindow] = useState("0")
    const [display, setDisplay] = useState()

    const handleDisplay = () => {
        
        console.log("done")
        
    }



    return (
        <>
    
            <div className="title">IOS Calculator</div>
            <div className="wrapper">
                <div className="window">{window}</div>
               <div className="firstLevel">

                    <div className="delete" onClick={handleDisplay}>
                        AC
                    </div>
                    <div className="negativeValue">
                        +/-
                    </div>
                    <div className="percent">
                        %
                    </div>
                    <div className="division">
                        /
                    </div>
                </div>
                
                <div className="secondLevel">

                    <div className="seven">
                        7
                    </div>
                    <div className="eight">
                        8
                    </div>
                    <div className="nine">
                        9
                    </div>
                    <div className="multiplication">
                        ×
                    </div>
                </div>

                <div className="thirdLevel">

                    <div className="four">
                        4
                    </div>
                    <div className="five">
                        5
                    </div>
                    <div className="six">
                        6
                    </div>
                    <div className="minus">
                        -
                    </div>
                </div>

                <div className="fourthLevel">

                    <div className="one">
                        1
                    </div>
                    <div className="two">
                        2
                    </div>
                    <div className="three">
                        3
                    </div>
                    <div className="plus">
                        +
                    </div>
                </div>

                <div className="fifthLevel">

                    <div className="zero">
                        0
                    </div>
                    <div className="comma">
                        ,
                    </div>
                    <div className="equal">
                        =
                    </div>
                    
                </div>

            </div>



            <div className="title">IOS Calculator</div>
            <div className="wrap">

            <div className="window2">{window}</div>  

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