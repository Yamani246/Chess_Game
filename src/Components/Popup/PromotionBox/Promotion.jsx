import './Promotion.css'
const PromotionBox = () => {
    const options = ['q','r','b','n']
    const color= 'w'
    const x=0
    const y=4
    const getPromotionPosition = () => {
        const style = {}
        if (x==7) 
            style.top='-12.5%'
        else
            style.top = '97.5%'

        if (y<=1)
            style.left='0%'
        else if (y>=6)
            style.right='0%'
        else
            style.left=`${12.5 * y -20}%`
        return style
        }
    return < div className='popup-inner promotion-choices ' style={getPromotionPosition()}>
        {options.map(option => <div className={`piece ${option}_${color}`}></div>)}
    </div>
}

export default PromotionBox