import React, { Component } from 'react'
import './Die.css'

// get our fontawesome imports
import { faDice, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Die extends Component {
  render () {
    return (
      <div>
        <FontAwesomeIcon icon={faCode} />
        <FontAwesomeIcon icon={faDice} />
        <i className={`Die fas fa-dice-${this.props.face}`} />
        <i className='fas fa-dice-one' />
      </div>
    )
  }
}

export default Die
