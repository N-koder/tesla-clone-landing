import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
const Section = (props) => {
  return (
    <Wrap bgIMG = {props.backgroundImg}>
        <Fade bottom>
            <Itemtext>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </Itemtext>
        </Fade>
        <Fade bottom>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.LeftButtonText}
                    </LeftButton>
                    {props.RightButtonText && 
                    <RightButton>
                    {props.RightButtonText}
                    </RightButton>
                    }
                    
                </ButtonGroup>
                <DownArrow src = '/images/down-arrow.svg' />
            </Buttons>
        </Fade>

    </Wrap>
  )
}

export default Section

const Wrap =styled.div`
    width : 100vw;
    height : 100vh;
    background-image : ${props => `url('/images/${props.bgIMG}')`};
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;

`

const Itemtext = styled.div`
    padding-top : 15vh;
    text-align : center;
`

const ButtonGroup = styled.div`
    display : flex;
    margin-bottom : 30px;
    @media (max-width : 768px){
        flex-direction : column;
    }
`

const LeftButton = styled.div`
    background-color : rgba(23 , 26 , 32 , 0.8);
    color: white;
    height :40px;
    width: 256px;
    text-transform : uppercase;
    font-size : 12px;
    opacity : 0.85;
    display :flex;
    justify-content : center;
    align-items : center;
    border-radius : 100px;  
    cursor : pointer;
    margin : 8px;
`

const RightButton = styled(LeftButton)`
    background-color : white;
    color : black;
    opacity : 0.65;
`

const DownArrow = styled.img`
    height : 40px;
    margin-top : 20px;
    animation : Down infinite 1.3s;
`

const Buttons = styled.div`
`
