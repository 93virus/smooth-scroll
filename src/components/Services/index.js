import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/pair_programming.svg'
import Icon2 from '../../images/pair_programming.svg'
import Icon3 from '../../images/pair_programming.svg'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Easy access</ServicesH2>
                        <ServicesP>You can access our platform from anywhere in the world.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Easy access</ServicesH2>
                        <ServicesP>You can access our platform from anywhere in the world.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Easy access</ServicesH2>
                        <ServicesP>You can access our platform from anywhere in the world.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
