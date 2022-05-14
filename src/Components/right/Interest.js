import React, { PureComponent } from 'react'
import "./Interest.css"

export class Interest extends PureComponent {
    render() {
        return (
            <div className="inter-body" id='interest'>
                <span className="inter-title">Interests</span>
                <div className="main-part">
                    Apart from being a web Developer, I enjoy most of my time in travelling and exploring new places around. Travelling from first is my primary hobby and whenever I get time I move out for new adventure and new destinations. Apart from this I love to watch movies and wen-series in my leisure time. I am also an aspiring chef and spend a large amount of time exploring the latest technologies in software world.
                </div>
            </div>
        )
    }
}

export default Interest
