import { useState } from "react";


const Main = ()=> {

    const [display, setDisplay] = useState("")

  

    return (
        <>
            <div className="title">IOS Calculator</div>
            <div className="wrapper">
                <div className="window"></div>
               <div className="firstLevel">

                    <div className="delete">
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
        </>
    )
}

export default Main;