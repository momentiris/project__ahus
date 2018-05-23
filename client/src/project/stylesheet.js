import styled, {injectGlobal} from 'styled-components';


injectGlobal`

  .navlink {
    font-family: 'Chronicle';
    font-size: 22px;
    letter-spacing: 0.5;
  }
  @media (max-width: 768px) {
    h1, h2 {
      font-family: 'Chronicle';
    }
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 25px;
    }
    h3, h4 {
      font-family: 'OpensansBold';
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 15px;
    }
    p {
      font-family: 'OpensansReg';
      font-size: 15px;
    }
  }
  @media (min-width: 768px) {
    h1, h2 {
      font-family: 'Chronicle';
      letter-spacing: 0.5px;
    }
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 32px;
    }
    h3 {
      font-family: 'Chronicle';
      letter-spacing: .4px;
      font-size: 24px;
    }

    h4, h5 {
      font-family: 'OpensansBold';
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 16px;
    }
    p {
      font-family: 'OpensansReg';
      font-size: 16px;
    }
  }

  html {
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 100vh;
    overflow-x: hidden;
  }
`;

export const colors = {
  lightgrey: '#E9EFE9',
  grey: '#ADADAD',
	purple: '#59539B',
	orange: '#EE7F00',
  yellow: '#FFEB00',
	green: '#00A388',
  red: '#D12D4E',
  blue: '#0094BB',
};
