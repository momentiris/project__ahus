import React, { Component } from 'react';
import { ScrollContainer, Card, Container, ContentWrap, NewsImage,  } from './styles';
import { HomeContext } from '../../Contexts/HomeContext';
import posed, {PoseGroup} from 'react-pose';

class ContentSlider extends Component {
	constructor(props) {
		super(props);
		this.scrollContainer = React.createRef();
	}

	scroll = (e, context) => {

		e.preventDefault()
		this.scrollContainer.current.scrollLeft > 20 ?
		context.toggleIsScrolled(true) :
		context.toggleIsScrolled(false)

		this.scrollContainer.current.scrollLeft += e.deltaY * 0.25;
	}

	async componentDidMount() {
		 await setTimeout(this.props.toggleContent, 300);
	}

	async componentWillUnmount() {
		 this.props.toggleContent();
	}

  render() {
   return (
		<HomeContext.Consumer>
		 	{(context) => (
				<ScrollContainer onWheel={(e) => this.scroll(e, context)} innerRef={this.scrollContainer} className="scrollcontainer">
					<Container withParent={false} className="sidebar" pose={this.props.isOpen ? 'enter' : 'exit'}>
						<PoseGroup>
						{
							this.props.type != 'all' && this.props.news.map((item, i) => {
								return item.type == this.props.type && i % 2 != 0 &&
								<Card pose="sort" key={i} type={item.type} color="white" width={item.type}>
									<ContentWrap type={item.type}>
										<small> 	{item.type}</small>
										<h4>{item.title}</h4>
										<p>{item.text}</p>
									</ContentWrap>
									<NewsImage>
									</NewsImage>
								</Card>
							})
						}

						{
							this.props.type == 'all' && this.props.news.map((item, i) => {
								return i % 2 == 0 &&
								<Card pose="sort" key={i} type={item.type} color="white" width={item.type}>
									<ContentWrap type={item.type}>
										<small> 	{item.type}</small>
										<h4>{item.title}</h4>
										<p>{item.text}</p>
									</ContentWrap>
									<NewsImage>
									</NewsImage>
								</Card>
							})
						}

					</PoseGroup>

				</Container>
					<Container withParent={false} className="sidebar" pose={this.props.isOpen ? 'enter' : 'exit'}>
						<PoseGroup>
						{
							this.props.type == 'all' && this.props.news.map((item, i) => {
								return i % 2 != 0 &&
								<Card key={i} type={item.type} color="white" width={item.type}>
									<ContentWrap type={item.type}>
										<small> 	{item.type}</small>
										<h4>{item.title}</h4>
										<p>{item.text}</p>
									</ContentWrap>
									<NewsImage>
									</NewsImage>
								</Card>
							})
						}
						{
							this.props.type != 'all' && this.props.news.map((item, i) => {
								return item.type == this.props.type && i % 2 == 0 &&
								<Card pose="sort" key={i} type={item.type} color="white" width={item.type}>
									<ContentWrap type={item.type}>
										<small> 	{item.type}</small>
										<h4>{item.title}</h4>
										<p>{item.text}</p>
									</ContentWrap>
									<NewsImage>
									</NewsImage>
								</Card>
							})
						}
					</PoseGroup>
				</Container>
				</ScrollContainer>
	 		)}
 		</HomeContext.Consumer>
   )
  }

}

export default ContentSlider;
