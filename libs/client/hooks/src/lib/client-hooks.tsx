import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ClientHooksProps {}

const StyledClientHooks = styled.div`
  color: pink;
`;

export function ClientHooks(props: ClientHooksProps) {
  return (
    <StyledClientHooks>
      <h1>Welcome to ClientHooks!</h1>
    </StyledClientHooks>
  );
}

export default ClientHooks;
