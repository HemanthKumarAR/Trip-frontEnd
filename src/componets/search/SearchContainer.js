// import QueryForm from "./QueryForm"
import QueryForm from "./QueryForm"
import Home from "../Home"
import HomeCarousel from "../HomeCarousel"
export default function SearchConatiner() {

    return (
        <div style={{ backgroundColor: "#fafafa", height: "90vh", margin: "0px", }}>
            <h1 style={{fontSize:"28px", marginLeft:"35%"}}> Travel more for less with Mytrip</h1>
            <QueryForm/>
            {/* <Home/> */}
            <HomeCarousel/>
        </div>
    )
}