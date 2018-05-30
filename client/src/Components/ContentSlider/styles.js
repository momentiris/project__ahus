import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose';
import { colors } from '../../project/stylesheet'
import { tween, easing } from 'popmotion';

const containerConfig = {
  enter: {
    delayChildren: 100,
    x: 0,
    staggerChildren: 50,

  },
  exit: {
    delayChildren: 100,
    staggerChildren: 50,
    x: 100,

  },

}

const itemProps = {
  enter: {
    opacity: 1,
    x: 0,
    delay: 300,
    transition: (props) => tween({
    ...props,
    duration: 200,
    ease: easing.easeOutQuad
   })
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: (props) => tween({
    ...props,
   duration: 200,
   ease: easing.ease
 }) },

};

const Item = posed.div(itemProps)

export const Container = posed.section(containerConfig);


export const Card = styled(Item)`
  min-width: ${props => props.type == 'news' || props.type == 'event' ? '700px' : '600px'};
  width: 400px;
  display: inline-flex;
  background: ${props => props.color};
  height: 210px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
    white-space: initial
    font-weight: light;
    color: ${props => props.type === 'event' ? 'white' : ''};
  cursor: pointer;

`
const getColor = type => {
  if (type === 'drift') return colors.yellow;
  if (type === 'news') return colors.browngrey;
  if (type === 'event') return colors.green;
}

export const ContentWrap = styled.article`
	min-width: 60%
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  background-position: 95% 5%;
  background-repeat: no-repeat;
  height: 100%
	background-color: ${props => getColor(props.type)}
  border-radius: 15px 0 0 15px;
  padding: 1rem;
  & > span {
    font-family: 'OpensansLight';
  }

`

export const NewsImage = styled.div`
  height: 100%
  width: 40%
  border-radius: 0 15px 15px 0;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
`

export const ScrollContainer = styled.section`

  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0rem 0rem 1rem 23.25rem;
  display: flex;
  flex-flow: column nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`
