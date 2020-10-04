import React, { useEffect, useState } from 'react';
import { Wrapper, ModalContent } from './DeleteMovie.styles'
import Button from '../../components/Button'

const DeleteMovie = (props) => {
    return (
        <Wrapper>
            <ModalContent>
                <div className={'close'} onClick={() => props.closeModal()}>&times;</div>
                <div className={'title-header'}>
                        DELETE MOVIE
                </div>
                <div className="modal-body">
                    Are you sure you want to delete this this movie?
                </div>
                <div className="modal-footer">
                    <Button className={'reset-button'} >
                        RESET
                    </Button>
                </div>
            </ModalContent>
        </Wrapper>
    )
}

export default DeleteMovie
