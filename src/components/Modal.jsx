import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const generateWrapper = (id) => {
    const wrapper = document.createElement('div')
    wrapper.id = id

    wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    wrapper.style.position = 'absolute'
    wrapper.style.zIndex = '1'
    wrapper.style.left = '0'
    wrapper.style.right = '0'
    wrapper.style.top = '0'
    wrapper.style.bottom = '0'

    wrapper.style.display = 'flex'
    wrapper.style.alignItems = 'center'
    wrapper.style.justifyContent = 'center'

    return wrapper
}

const htmlBody = document.getElementsByTagName('body')[0]

const Modal = ({ open = false, children, handleOpen }) => {
    const [modalId] = useState(Date.now())
    const wrapper = generateWrapper(modalId)

    if (handleOpen) {
        wrapper.onclick = handleOpen
    }

    useEffect(() => {
        if (open) {
            htmlBody.style.overflow = 'hidden'
            htmlBody.appendChild(wrapper)
        }

        return () => {
            const findNodeR = document.getElementById(modalId)

            htmlBody.removeAttribute('style')
            if (findNodeR) htmlBody.removeChild(findNodeR)
        }
    }, [modalId, open, wrapper])

    return open ? createPortal(children, wrapper) : null
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
    handleOpen: PropTypes.func.isRequired,
}

export default Modal
