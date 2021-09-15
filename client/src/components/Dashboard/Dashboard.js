import React, { Component } from 'react';

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      location: '',
      comments: ''
    }
  }

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value
    })
  }

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    })
  }

  handleRatingChange = event => {
    this.setState({
      rating: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.location} ${this.state.comments} ${this.state.rating}`)
    event.preventDefault()
  }

  render() {
    const { location, comments, rating} = this.state
    return (
      <form onSumbit={this.handleSubmit}>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={this.handleLocationChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea 
          value={comments} 
          onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <label>Rating</label>
          <select value={rating} onChange={this.handleRatingChange}>
              <option value="decent">Decent</option>
              <option value="good">Good</option>
              <option value="great">Great</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Dashboard;