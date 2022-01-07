import styled from "styled-components";

export const Form = styled.form`
width : 40vw;
input{
    width : 100%;
    height : 35px;
    text-align : center;
}

button{
    color : white;
    background : #094074;
    padding : 10px 20px;
    margin-top : 10px;
    border : none;
    border-radius : 5px;
    width : 100%
}

@media (max-width : 960px){
    width : 90vw;
}
`

export const Cover = styled.div`
margin-top : 10px;

    select{
        margin-top: 5px;
        width : 100%;
        height : 35px;
    }

`

export const Result = styled.div`
width : 50vw;
position : fixed;
top : 10;
display : flex;
background : white;
z-index : 1;
box-shadow : 5px 5px 15px black;
flex-direction : column;
justify-content : center;
align-items : center;
padding : 15px;
border-radius : 10px;

img{
    width : 60%;
}
@media (max-width : 960px){
    width : 80vw;
}
`