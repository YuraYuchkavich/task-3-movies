import React from 'react'
import { Wrapper } from './Footer.styles'
import Text from '../../components/Text'

const Footer = () => {

    return (
        <Wrapper>
            <Text className={'logo-text-bold'}>
                netflix
            </Text>
            <Text>
                roulette
            </Text>
        </Wrapper>
    )
}

export default Footer
