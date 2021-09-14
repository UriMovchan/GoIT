import StyledSection from "components/styled/StyledSection";

const Section = (props) => {
  const { title, children } = props;
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};

export default Section;
