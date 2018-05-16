import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { SlideWrap, Card } from './styles';

class ContentSlider extends Component {
	constructor(props) {
		super(props);

	}
	temp(e){
		e > 0.01 ?
		 this.props.toggleBlock(true) :
		 this.props.toggleBlock(false)
	}
	
  render() {
    const params = {
      ContainerEl: 'section',
      slideClass: 'hej',
      lazy: true,
      slidesPerView: 2,
  		slidesPerColumn: 2,
  		spaceBetween: 20,
  		freeMode: true,
  		mousewheel: true,
      containerClass: 'customized-swiper-container',
			on: {
				progress: this.temp.bind(this)
			}
   }

   return (

     <Swiper {...params} >
       <Card>Slide 1</Card>
       <Card>Slide 2</Card>
       <Card>Slide 3</Card>
       <Card>Slide 4</Card>
       <Card>Slide 5</Card>
       <Card>Slide 6</Card>
       <Card>Slide 7</Card>
       <Card>Slide 8</Card>
       <Card>Slide 9</Card>
       <Card>Slide 10</Card>
     </Swiper>

   )
  }

}

export default ContentSlider;
