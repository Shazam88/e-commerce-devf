import React from 'react'
import './BannerMidle.css'
import { ActiveBanner } from '../../HOCS/ActiveBanner'

export const BannerMiddle = () => {
    return (
        <div className="about contaImg">
            <p>Prueba</p>
            { ActiveBanner }
        </div>
    )
}
