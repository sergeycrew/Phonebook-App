import { SectionItem, Title } from './Section.styled';
//import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionItem>
      {title && <Title>{title}</Title>}
      {children}
    </SectionItem>
  );
};
