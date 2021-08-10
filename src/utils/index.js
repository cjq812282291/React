export const getCurrentCity = () => {
    const localCity = JSON.parse(localStorage.getItem('zf_city'))


    if (!localCity) {
        const curCity = new window.BMap.localCity()

    }
}