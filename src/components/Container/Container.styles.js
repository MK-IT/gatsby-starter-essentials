import styled from 'styled-components';

// FIXME: shouldn't padding be dynamic depending on the screen size?

const StyledContainer = styled.div`
  ${(props) => `
    position: relative;
    box-sizing: border-box;
    width: 100%;

    max-width: ${
      props.maxWidth &&
      props.theme.breakpoints.getBoundaries(props.maxWidth).maxWidth
        ? `${props.theme.breakpoints.getBoundaries(props.maxWidth).maxWidth}px`
        : 'none'
    };
    min-height: ${props.size ? `${props.size}vh` : '0'};
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: ${
      props.center === 'horizontal' || props.center === true
        ? 'center'
        : 'stretch'
    };
    justify-content: ${
      props.center === 'vertical' || props.center === true
        ? 'center'
        : 'flex-start'
    };

    /* full width background image */
    ${
      props.background
        ? `&:before {
            position: absolute;
            left: 50%;
            right: 50%;
            width: 100vw;
            height: 100%;
            margin-left: -50vw;
            margin-right: -50vw;
            z-index: -2;
            content: '';
            background: ${props.background};
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }`
        : ''
    }

    /* full width background overlay */
    ${
      props.overlay
        ? `&:after { position: absolute;
            left: 50%;
            right: 50%;
            width: 100vw;
            height: 100%;
            margin-left: -50vw;
            margin-right: -50vw;
            z-index: -2;
            content: '';
            background: ${props.overlay};
          }`
        : ''
    }
  `}
`;

export default StyledContainer;
