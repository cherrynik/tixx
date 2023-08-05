import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiFeaturesProps {}

const StyledUiFeatures = styled.div`
  color: pink;
`;

export function UiFeatures(props: UiFeaturesProps) {
  return (
    <StyledUiFeatures>
      <h1>Welcome to UiFeatures!</h1>
    </StyledUiFeatures>
  );
}

export default UiFeatures;
