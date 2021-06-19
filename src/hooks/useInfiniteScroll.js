import { useRef, useCallback } from 'react'

const useInfiniteScroll = ({ loading, reFetch }) => {
    const observer = useRef()
    const observerRef = useCallback(
        (node) => {
            if (loading) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    reFetch()
                }
            })
            if (node) observer.current.observe(node)
        },
        [loading, reFetch]
    )
    return { observerRef }
}

export default useInfiniteScroll
