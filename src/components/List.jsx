import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { IoSync } from 'react-icons/io5'

// Components
import Modal from '../components/Modal'

const Base = styled.div`
    display: grid;
    grid-gap: 1rem;
`
const animation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`
const AnimationWrapper = styled.div`
    animation-name: ${animation};
    animation-duration: 0.8s;
`
const Dialog = styled.div`
    background-color: #fff;
    width: 80%;
    max-width: 420px;
    border-radius: 1rem;
    padding: 1rem;
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingWrapper = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
        margin: 0;
        margin-left: 0.5rem;
        font-size: 0.85rem;
    }
`

const LoadingAnimation = styled.div`
    width: 24px;
    height: 24px;
    display: inline-block;
    animation: ${rotateAnimation} infinite 2s linear;
`

const List = ({
    data,
    loading,
    error,
    renderItem: CP,
    detailItem: DC,
    observerRef,
}) => {
    const [openDialog, setOpenDialog] = useState(false)
    const [selectedItem, setSelectedItem] = useState(undefined)

    if (!Array.isArray(data) && data.length > 0) return

    const handleOpen = () => {
        setOpenDialog((prev) => !prev)
    }

    return (
        <Base>
            {DC && (
                <Modal open={openDialog} handleOpen={handleOpen}>
                    <Dialog>
                        <DC {...selectedItem} />
                    </Dialog>
                </Modal>
            )}

            {data.map((item, i) => {
                const props = {
                    index: i,
                    ...item,
                }
                const isLastElement = data.length === i + 1

                if (isLastElement) props.ref = observerRef
                if (DC)
                    props.onClick = () => {
                        setSelectedItem(item)
                        handleOpen()
                    }
                return (
                    <AnimationWrapper key={i}>
                        <CP {...props} />
                    </AnimationWrapper>
                )
            })}

            {!error && loading && (
                <LoadingWrapper>
                    <LoadingAnimation>
                        <IoSync size={24} color="#070707" />
                    </LoadingAnimation>
                    <p>Loading...</p>
                </LoadingWrapper>
            )}
            {error && <p>Error!</p>}
        </Base>
    )
}

List.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    renderItem: PropTypes.elementType.isRequired,
    detailItem: PropTypes.elementType,
}

export default List
