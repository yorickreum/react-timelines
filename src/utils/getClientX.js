const getClientX = e => (isNaN(e.clientX) ? e.touches[0].clientX : e.clientX)

export default getClientX
