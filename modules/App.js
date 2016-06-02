import React from 'react'
import Bootstrap from 'bootstrap-sass'
import ReactDOM from 'reac-dom'

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
      3: false
    }
  },
  onHandleHeart(e){
    var changeState = {};
    changeState[ReactDOM.findDOMNode(e.target).dataset.id] = !this.state[ReactDOM.findDOMNode.(e.target).dataset.id]
    this.setState(changeState);
  },
  render() {
    return (
      <main className="views-block">
        <h1 className="heading">T-shirt Views</h1>
        <div className="row">
          {this.props.shirts.map(function(resp, i){
            return <div key={i} className="col-md-4"></div>
            <div className="view_wrapper">
              <div id={resp.id} className="carousel" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                  <div className="item active">
                    <img class="shirt__image" src={resp.imageUrlFront}/>
                  </div>
                  <div className="item">
                    <img className="shirt" src={resp.imageUrlBack}/>
                  </div>
                </div>
                <a className="carousel-swap" href={`#${resp.id}`} role="button" data-slide="prev">
                  <span className="flip glyphicon-share"></span>
                </a>
              </div>
              <div className="btn-group bar">
                  <div>
                    <button className="btn btn-default bar__el"><span className="glyphicon glyphicon-retweet icon carousel-swap" href={`#${resp.id}`} data-slide="previous"></span></button>
                    <button className="btn btn-default bar__el" onClick={this.onHandleHeart}><span data-id={resp.id} className="glyphicon glyphicon-heart-empty icon"></span></button>
                    <div className="dropup-button">
                    <button className="btn btn-default bar__el" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="glyphicon icon">XL</span></button>
                    <ul className="drop-menu">
                      <li>XS</li>
                      <li>S</li>
                      <li>M</li>
                      <li>L</li>
                    </ul>
                    <div className="dropup dropup__button">
                    <button type="btn btn-default bar__el dropdown-toogle square__wrapper"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="color__square"></div>
                    </button>
                    <ul>
                      <li className="square__wrapper"><div className="color__square"></div></li>
                      <li className="square__wrapper"><div className="color__square"></div></li>
                      <li className="square__wrapper"><div className="color__square"></div></li>
                      <li className="square__wrapper"><div className="color__square"></div></li>
                    </ul>
                    </div>
                    <button className="btn btn-default bar__el"><span className="glyphicon glyphicon-shopping-cart icon"></span></button>
                    </div>
                  </div>
                </div>
              </nav>
              <h5>{resp.title}</h5>
              <h5>{resp.price}</h5>
            </div>
            </div>
          },this)}
        </div>
      </main>
    )
  }
})
