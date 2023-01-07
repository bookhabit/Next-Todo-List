import {NextPage} from "next"
import styled from "styled-components";

const Container = styled.div`
    font-style:italic;
    color:red;
    padding:20px;
`

const index:NextPage = ()=>{
    return (
        <Container>
            <h1>hello Typescript</h1>
            <h2>hello Typescript</h2>
            <p>hello Typescript</p>
            <ul>
                <li>hello Typescript</li>
            </ul>
            <a>hello Typescript</a>
            <span>hello Typescript</span>
        </Container>
    )
}

export default index;