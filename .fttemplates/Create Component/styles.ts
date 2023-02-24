import styled from 'styled-components';
import { StyledProps } from './index';

export default interface StyledProps {
}

export const Button = styled.div<StyledProps>`
    border-radius: 6px;
    width: 300px;
`;
