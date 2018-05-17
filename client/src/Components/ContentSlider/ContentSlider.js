import React, { Component } from 'react';
import { ScrollContainer, Card, ContentWrap, NewsImage } from './styles';
import { HomeContext } from '../../Contexts/HomeContext';

class ContentSlider extends Component {
	constructor(props) {
		super(props);
		this.scrollContainer = React.createRef();
	}

	scroll = (e) => {
		this.scrollContainer.current.scrollLeft > 20 ?
		this.props.toggleBlock(true) :
		this.props.toggleBlock(false);
		e.preventDefault()

		this.scrollContainer.current.scrollLeft += e.deltaY * 0.25;
	}

  render() {
   return (
		 <HomeContext.Consumer>
		 	{(context) => (
			<ScrollContainer onWheel={this.scroll} innerRef={this.scrollContainer} className="scrollcontainer">
				<div>
			    <Card color="white" width="400px">Slide 2</Card>
			    <Card color="white" width="400px">Slide 3</Card>
			    <Card color="white" width="400px">Slide 4</Card>
			    <Card color="white" width="400px">Slide 5</Card>
				</div>
				<div>
			    <Card color="white" width="500px">Slide 2</Card>
			    <Card color="white" width="500px">Slide 3</Card>
			    <Card color="white" width="500px">Slide 4</Card>
			    <Card color="white" width="500px">Slide 5</Card>
				</div>

			</ScrollContainer>

	 )}
 </HomeContext.Consumer>

   )
  }

}

export default ContentSlider;
