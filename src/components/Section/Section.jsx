import PropTypes from 'prop-types';
import { StyledContainer } from './Styled';

export const Section = ({title, children}) => {
  return (
    <StyledContainer className="section">
      <h1 className="title">{title}</h1>
      {children}
    </StyledContainer>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
}
