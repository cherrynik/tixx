import 'primereact/resources/themes/lara-dark-purple/theme.css';
import { Button as ButtonComponent, type ButtonProps } from 'primereact/button';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiComponentsProps {}

const StyledUiComponents = styled(ButtonComponent)``;

export function Button(props: UiComponentsProps) {
  return (
    <ButtonComponent {...props} />
  );
}

export default Button;
