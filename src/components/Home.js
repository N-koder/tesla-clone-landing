import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
        <Section
            title = "Model S"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            LeftButtonText = "custom order"
            RightButtonText = "existing inventory"
        />
        <Section
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            LeftButtonText = "custom order"
            RightButtonText = "existing inventory"
        />
        <Section
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            LeftButtonText = "custom order"
            RightButtonText = "existing inventory"
         />
        <Section
             title = "Model Y"
             description = "Order Online for Touchless Delivery"
             backgroundImg = "model-y.jpg"
             LeftButtonText = "custom order"
             RightButtonText = "existing inventory"
        />

        <Section
             title = "Lowest Cost Solar Panels in America"
             description = "Money-back guarantee"
             backgroundImg = "solar-panel.jpg"
             LeftButtonText = "Order now"
             RightButtonText = "Learn more"
        />

        <Section
             title = "Solar for New Roofs"
             description = "Solar Roof Costs Less Than a New Roof"
             backgroundImg = "solar-roof.jpg"
             LeftButtonText = "Order now"
             RightButtonText = "Learn more"
        />

        <Section
             title = "Accessories"
             description = ""
             backgroundImg = "accessories.jpg"
             LeftButtonText = "Shop Now"
        />
    </Container>
  )
}

export default Home


const Container = styled.div`
    height : 100vh;
`