import styled, { css } from 'styled-components';
import createVariants from '../../utils/variantUtil';
import { theme } from '../../styles/index';

interface StyledProps {
    buttonType: 'FILLED' | 'OUTLINED' | 'TEXT';
    buttonGradient: 'NONE' | 'HORIZONTAL';
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
    ${({ buttonType, buttonGradient, borderRadius, icon }) =>
        createVariants(
            {
                variants: {
                    buttonType: {
                        FILLED: css`
                            background: ${theme.color('primary', 'main')};
                            & > p {
                                color: ${theme.color('util', 'light')};
                            }
                        `,
                        OUTLINED: css`
                            background: ${theme.color('util', 'light')};
                            border: solid 1px ${theme.color('primary', 'main')};
                            & > p {
                                color: ${theme.color('primary', 'main')};
                            }
                        `,
                        TEXT: css`
                            background: ${theme.color('util', 'light')};
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
                compoundVariants: [
                    {
                        buttonType: 'FILLED',
                        buttonGradient: 'HORIZONTAL',
                        css: css`
                            background: linear-gradient(
                                to right,
                                ${theme.color('primary', 'main')},
                                ${theme.color('secondary', 'main')}
                            );
                        `
                    },
                    {
                        buttonType: 'OUTLINED',
                        buttonGradient: 'HORIZONTAL',
                        css: css`
                            border: solid 1px transparent;
                            background-image: linear-gradient(
                                    rgba(255, 255, 255, 0),
                                    rgba(255, 255, 255, 0)
                                ),
                                linear-gradient(
                                    to right,
                                    ${theme.color('primary', 'main')},
                                    ${theme.color('secondary', 'main')}
                                );
                            background-origin: border-box;
                            box-shadow: 99999999px 0px 0px #fff inset;
                        `
                    }
                ]
            },
            { buttonType, buttonGradient, borderRadius, icon }
        )};
`;
