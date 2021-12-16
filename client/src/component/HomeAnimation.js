import React from 'react'
import '../scss/animation.scss'

const HomeAnimation = () => {
  return (
    <div className="animation-container">
      <div className="animation-car-wrapper">
        <div className="animation-car-wrapper_inner">
          <div className="animation-car_outter">
            <div className="animation-car">
              <div className="animation-body">
                <div></div>
              </div>
              <div className="animation-decos">
                <div className="animation-line-bot"></div>
                <div className="animation-door">
                  <div className="animation-handle"></div>
                  <div className="animation-bottom"></div>
                </div>
                <div className="animation-window"></div>
                <div className="animation-light"></div>
                <div className="animation-light-front"></div>
                <div className="animation-antenna"></div>
                <div className="animation-logo">
                  <div className="animation-box"></div>
                </div>
              </div>
              <div>
                <div className="animation-wheel"></div>
                <div className="animation-wheel"></div>
              </div>
              <div className="animation-wind">
                <div className="animation-p animation-p1"></div>
                <div className="animation-p animation-p2"></div>
                <div className="animation-p animation-p3"></div>
                <div className="animation-p animation-p4"></div>
                <div className="animation-p animation-p5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animation-ground"></div>
    </div>
  )
}

export default HomeAnimation
