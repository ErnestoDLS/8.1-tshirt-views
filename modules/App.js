import React from 'react'
import Bootstrap from 'bootstrap-sass'
import ReactDOM from 'react-dom'

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
  getInitialState(){
    return {
      1: false,
      2: false,
      3: false,
    }
  },
  onHandleHeart(e){
    var newState = {};
    newState[ReactDOM.findDOMNode(e.target).dataset.id] = !this.state[ReactDOM.findDOMNode(e.target).dataset.id]
    this.setState(newState);
  },
  render() {
    return(
      <section className="block">
        <h1 className="heading">T-shirts</h1>
          <div className="rows">
            {this.props.shirts.map(function(resp, i){
              return <div key={i} className="col-md-4">
                <div className="wrapper">
                  <div id={resp.id} className="carousel" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner">
                      <div className="active__item">
                      <img className="shirt__image" src={resp.imageUrlFront}/>
                      </div>
                      <div className="item">
                      <img className="shirt__image" src={resp.imageUrlBack}/>
                      </div>
                    </div>

                    <a className="carousel-swap" href={`#${resp.id}`} role="button" data-slide="prev">
                      <span className="flip glyphicon glyphicon-share"></span>
                    </a>
                  </div>
                  
                  <div className="btn-group bar">
                  <div>
                  <button className="btn btn-default "><span className="glyphicon glyphicon-retweet icon carousel-swap" href={`#${resp.id}`} data-slide="prev"></span></button>
                  <button className="btn btn-default " onClick={this.onHandleHeart}><span data-id={resp.id} className={`icon glyphicon ${this.state[resp.id]? "glyphicon-heart" : "glyphicon-heart-empty"}`}></span></button>
                  <div className="dropup dropup__button">
                  <button className="btn btn-default " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="glyphicon icon">XL</span></button>
                  <ul className="dropdown-menu">
                    <li className="shirt__size">XS</li>
                    <li className="shirt__size">S</li>
                    <li className="shirt__size">M</li>
                    <li className="shirt__size">L</li>
                  </ul>
                  </div>
                  <div className="dropup dropup__button test">
                  <button className="btn btn-default  dropdown-toggle square__wrapper" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><div className="square__color"></div></button>
                  <ul className="dropdown-menu dropup__wrapper">
                    <li className="square__wrapper"><div className="square__color square__color--1"></div></li>
                    <li className="square__wrapper"><div className="square__color square__color--2"></div></li>
                    <li className="square__wrapper"><div className="square__color square__color--3"></div></li>
                    <li className="square__wrapper"><div className="square__color"></div></li>
                  </ul>
                  </div>
                  <button className="btn btn-default "><span className="glyphicon glyphicon-shopping-cart icon"></span></button>
                </div>
              </div>

              <h4 className="item__title">{resp.title}</h4>
              <h4 className="item__price">${resp.price}</h4>

            </div>
          </div>
        },this)}
      </div>
  </section>
  )
}
})
