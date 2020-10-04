import React, { useState } from 'react'
import Text from '../../components/Text'
import { Wrapper, Image, Description } from './CardMovie.styles'
import noImage from './not-found.png'
import PropTypes from 'prop-types'
import EditMovie from '../../containers/EditMovie'
import DeleteMovie from '../../containers/DeleteMovie'

const CardMovie = (props) => {

    const [openMaskMenu, setOpenMaskMenu] = useState(false)
    const [isEditFilmModal, setEditFilmModal] = useState(false)
    const [isDeleteFilmModal, setDeleteFilmModal] = useState(false)

    const openMenu = () => {
        setOpenMaskMenu(true);
    }

    const closeMenu = () => {
        setOpenMaskMenu(false);
    }

    const onEditMovie = () => {
        setEditFilmModal(true);
    }

    const closeEditMovie = () => {
        if (isEditFilmModal) {
            setEditFilmModal(false) 
        }
        else {
            setEditFilmModal(true) 
        }
    }

    const onDeleteMovie = () => {
        setDeleteFilmModal(true);
    }

    const closeDeleteMovie = () => {
        if (isDeleteFilmModal) {
            setDeleteFilmModal(false) 
        }
        else {
            setDeleteFilmModal(true) 
        }
    }

    return (
        <>
        <Wrapper>
            <div className={'change-movie'}>
                <Image  
                    alt = 'test'
                    src={props.movie.image || noImage}
                ></Image>
                <div className="mask" onClick={openMenu}>
                    <div onClick={openMenu}> </div>
                </div>
                {openMaskMenu && 
                <div className="mask-menu" onMouseLeave={closeMenu}>
                    <div className={'close'} onClick={() => props.closeModal()}>&times;</div>
                    <div className='item-menu' onClick={onEditMovie}>Edit</div>
                    <div className='item-menu'  onClick={onDeleteMovie}>Delete</div>
                </div>}
             </div>
            <Description>
                <div className = 'main-information'>
                <Text className={'name-movie'}>{props.movie.name}</Text>
                <Text className={'release-date'}>{props.movie.releaseDate}</Text>
                </div>
                <Text className={'genres-movie'}>{props.movie.genre}</Text>
            </Description>
        </Wrapper>
        {
            isEditFilmModal && <EditMovie closeModal={closeEditMovie}/>
        }
        {
            isDeleteFilmModal && <DeleteMovie closeModal={closeDeleteMovie}/>
        }
        </>
    )
}

CardMovie.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    releaseDate: PropTypes.number,
    genre: PropTypes.arrayOf(PropTypes.string)
}

export default CardMovie