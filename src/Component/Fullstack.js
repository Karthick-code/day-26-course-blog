import data from "./data.json";
import { Cards } from "./Cards"
export function Fullstack() {
    data = data.filter((ele) => { return ele.name === "FullStack Development" })
    return (
        <>
            <div className="Cards">
                {data.map((ele, index) => {
                    return <Cards key={index} name={ele.name} poster={ele.poster} href={ele.href} />
                })}
            </div>
        </>
    )
}
