import React from 'react'
import Bootstrap from 'bootstrap-sass'

export default React.createClass({
  getDefaultProps(){
    return {
            shirts: [
        {
          id: 1,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Save my Trees",
          price: 19

        },
        {
          id: 2,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Nature Lover",
          price: 19

        },
        {
          id: 3,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Forrest Walk",
          price: 19

        }
      ]
    }
  },
  render() {
    return (
      <main className="blocks">
        <h1 className="heading">T-shirt Views</h1>
        <div className="row">
          {this.props.shirts.map(function(resp, i){
            return <div key={i} className="col-md-4"></div>
            <div className="one">
              <div id="imageswap" className="carousel" data-ride="carousel" data-interval="false">
                <div className="inner">
                  <div className="item current">
                    <img class="shirt" src={resp.imageUrlFront}/>
                  </div>
                  <div className="item">
                    <img className="shirt" src={resp.imageUrlBack}/>
                  </div>
                </div>
                <a className="carousel-swap" href="#imageswap" role="button" data-slide="prev">
                  <span className="flip glyphicon-share"></span>
                </a>
              </div>
              <nav className="navbar">
                <div className="buttons">
                  <div>
                    <button className="navbutton-default"><span className="glyphicon glyphicon-retweet icon carousel-swap" href="#imageswap" data-slide="previous"></span></button>
                    <button className="button-default"><span className="glyphicon glyphicon-heart-empty icon"></span></button>
                    <div className="dropup-button">
                      <button className="navbutton-default" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="glyphicon icon">XL</span></button>
                      <ul className="drop-menu">
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                      </ul>
                      <div>
                        <button type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <div className="square"></div>
                        </button>
                        <ul>
                          <li className="square__border"><div className="color__square"></div></li>
                          <li className="square__border"><div className="color__square"></div></li>
                          <li className="square__border"><div className="color__square"></div></li>
                          <li className="square__border"><div className="color__square"></div></li>
                        </ul>
                      </div>
                      <button><span className="glyphicon glyphicon-shopping-cart icon"></span></button>
                    </div>
                  </div>
                </div>
              </nav>
              <h5>{resp.title}</h5>
              <h5>{resp.price}</h5>
            </div>
            </div>
          })}
        </div>
      </main>
    )
  }
})
