import data from "./data.json";
import {Cards } from "./Cards"
export function Datascience() {
    var datascience=data.filter((ele)=>{return ele.name==="DataScience"})
    return (
        <>
            <div className="Cards">
                {datascience.map((ele,index) => {
                    return <Cards key={index} name={ele.name} poster={ele.poster} href={ele.href} />
                })}
            </div>
        </>
    )
}
