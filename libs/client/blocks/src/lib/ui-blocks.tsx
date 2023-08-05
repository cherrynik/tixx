import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiBlocksProps {}

const StyledUiBlocks = styled.div`
  color: pink;
`;

export function UiBlocks(props: UiBlocksProps) {
  return (
    <StyledUiBlocks>
      <h1>Welcome to UiBlocks!</h1>
    </StyledUiBlocks>
  );
}

export default UiBlocks;
