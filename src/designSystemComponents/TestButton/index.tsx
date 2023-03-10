import React from 'react';
import * as S from './styles';

export interface StyledProps {
    buttonType: 'FILLED' | 'OUTLINED' | 'TEXT';
    buttonGradient: 'NONE' | 'HORIZONTAL';
    borderRadius: boolean;
    icon: boolean;
}

interface ComponentProps extends StyledProps {
    onClick?: () => void;
    iconPath: './assets/WhiteVector.svg' | './assets/OrangeVector.svg';
    contentText: string;
}

const TestButton: React.FC<ComponentProps> = ({
    onClick,
    buttonType,
    borderRadius,
    buttonGradient,
    icon,
    iconPath,
    contentText
}) => {
    return (
        <S.ButtonWrapper
            onClick={onClick}
            buttonType={buttonType}
            buttonGradient={buttonGradient}
            borderRadius={borderRadius}
            icon={icon}
        >
            <img src={iconPath} alt="" />
            <p>{contentText}</p>
        </S.ButtonWrapper>
    );
};

export default TestButton;
