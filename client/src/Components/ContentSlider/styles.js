import styled from 'styled-components';


export const Card = styled.div`
  width: ${props => props.width};
  display: inline-flex;
  background: ${props => props.color};
  height: 200px;
  margin: 1rem;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth

`

export const ContentWrap = styled.article`
	width: 60%
  height: 40%;
	background: violet;
  border-radius: 20px 0 0 20px;
`

export const NewsImage = styled.div`
  height: 100%
  width: 40%
  border-radius: 0 20px 20px 0;
  background: DodgerBlue
  padding: 0;
  margin: 0;
`

export const ScrollContainer = styled.section`
  background: skyblue;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 1rem 0rem 1rem 22.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;


  ::-webkit-scrollbar {
    display: none;
}
`
