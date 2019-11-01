import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        { this.props.bands.map((band,i) => <li key={i}>{band.name}</li>)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({
    type: "ADD_BAND",
    band
  })
})

export default connect(state => ({bands: state.bands}), mapDispatchToProps)(BandsContainer)
