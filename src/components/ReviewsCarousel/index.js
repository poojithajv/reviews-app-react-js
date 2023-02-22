// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {initialReviewsCarouselIndex: 0}

  onClickLeftArrow = () => {
    const {initialReviewsCarouselIndex} = this.state

    if (initialReviewsCarouselIndex > 0) {
      this.setState(prevState => ({
        initialReviewsCarouselIndex: prevState.initialReviewsCarouselIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {initialReviewsCarouselIndex} = this.state
    const {reviewsList} = this.props

    if (initialReviewsCarouselIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        initialReviewsCarouselIndex: prevState.initialReviewsCarouselIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="image" />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {initialReviewsCarouselIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[initialReviewsCarouselIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="arrow-button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="left-arrow"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="right-arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
