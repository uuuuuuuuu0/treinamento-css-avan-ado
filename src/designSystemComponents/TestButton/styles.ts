import styled, { css } from 'styled-components';
import createVariants from '../../utils/variantUtil';
import { theme } from '../../styles/index';

interface StyledProps {
    buttonType: 'FILLED' | 'OUTLINED' | 'TEXT';
    borderRadius: boolean;
    icon: boolean;
}

export const ButtonWrapper = styled.button<StyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 328px;
    height: 40px;
    border: 0px;
    & > p {
        font-size: 16px;
    }
    & > img {
        max-width: 10.5px;
        max-height: 10.5px;
    }
    ${({ buttonType, borderRadius, icon }) =>
        createVariants(
            {
                variants: {
                    buttonType: {
                        FILLED: css`
                            background: ${theme.color('primary', 'main')};
                            & > p {
                                color: ${theme.color('secondary', 'main')};
                            }
                        `,
                        OUTLINED: css`
                            background: ${theme.color('secondary', 'main')};
                            border: solid 1px ${theme.color('primary', 'main')};
                            & > p {
                                color: ${theme.color('primary', 'main')};
                            }
                        `,
                        TEXT: css`
                            background: ${theme.color('secondary', 'main')};
                            & > p {
                                color: ${theme.color('primary', 'main')};
                            }
                        `
                    },
                    borderRadius: {
                        true: css`
                            border-radius: 20px;
                        `,
                        false: css`
                            border-radius: 8px;
                        `
                    },
                    icon: {
                        true: css`
                            & > img {
                                display: flex;
                            }
                        `,
                        false: css`
                            & > img {
                                display: none;
                            }
                        `
                    }
                },
                compoundVariants: []
            },
            { buttonType, borderRadius, icon }
        )};
`;
