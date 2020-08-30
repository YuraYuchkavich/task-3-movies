import React from 'react'
import { Wrapper, SearchBlock, LogoBlock } from './Header.styles'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Input from '../../components/Input'

const Header = () => {

    return (
        <Wrapper>
            <LogoBlock>
                <div className='logo'>
                    <Text className={'logo-text-bold'}>
                        netflix
                    </Text>
                    <Text>
                        roulette
                    </Text>
                </div>
                <Button className={'add-movie-button'}>
                    + ADD MOVIE
                </Button>
            </LogoBlock>
            <SearchBlock>
                <Input className={'search-input'} placeholder={'What do you want to watch?'}></Input>
                <Button className={'search-button'}>
                    SEARCH
                </Button>
            </SearchBlock>
        </Wrapper>
    )
}

export default Header
