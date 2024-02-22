// import QueryForm from "./QueryForm"
import QueryForm from "./QueryForm"
import Home from "../Home"
export default function SearchConatiner() {

    return (
        <div style={{ backgroundColor: "#fafafa", height: "90vh", margin: "0px", }}>
            <h1>Search vehicle Here.......</h1>
            <QueryForm/>
            <Home/>
        </div>
    )
}