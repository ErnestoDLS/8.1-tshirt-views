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

})
