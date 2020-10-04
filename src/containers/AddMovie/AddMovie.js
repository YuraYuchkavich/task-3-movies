import React, { useEffect, useState } from 'react';
import { Wrapper, ModalContent } from './AddMovie.styles'
import Button from '../../components/Button'
import Text from '../../components/Text'
import { getMockMovies } from '../../mockData/mockData'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'

const genre =  ["Action", "Comedy", "Drama"]

const AddMovie = (props) => {
    return (
        <Wrapper>
            <ModalContent>
                <div className={'close'} onClick={() => props.closeModal()}>&times;</div>
                <div className={'title-header'}>
                        ADD MOVIE
                </div>
                <div className="modal-body">
                    <div className={'modal-block'}>
                        <div className={'modal-text'}>TITLE</div>
                        <Input className={'modal-input'} placeholder={'Title'}></Input>
                    </div>
                    <div className={'modal-block'}>
                        <div className={'modal-text'}>SELECT DATE</div>
                        <Input className={'modal-input'} placeholder={'Select Date'}></Input>
                    </div>
                    <div className={'modal-block'}>
                        <div className={'modal-text'}>MOVIE URL</div>
                        <Input className={'modal-input'} placeholder={'Movie URL here'}></Input>
                    </div>
                    <div className={'modal-block'}>
                        <div className={'modal-text'}>GENRE</div>
                        <Dropdown className='modal-input' values={genre}/>
                    </div>
                    <div className={'modal-block'}>
                        <div className={'modal-text'}>OVERVIEW HERE</div>
                        <Input className={'modal-input'} placeholder={'Overview here'}></Input>
                    </div>
                    <div className={'modal-block'}>
                        <div className={'modal-text'}>RUNTIME HERE</div>
                        <Input className={'modal-input'} placeholder={'Runtime here'}></Input>
                    </div>
                    <div className={'modal-block'}>
                        <div className={'modal-text'}>MOVIE URL</div>
                        <Input className={'modal-input'} placeholder={'Movie URL here'}></Input>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button className={'reset-button'} >
                        RESET
                    </Button>
                    <Button className={'submit-button'} >
                        SUBMIT
                    </Button>
                </div>
            </ModalContent>
        </Wrapper>
    )
}

export default AddMovie
