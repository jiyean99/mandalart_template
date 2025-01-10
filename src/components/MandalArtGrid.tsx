import {MainGrid, SubGrid, SubCell, MandalArtGridWrap, SubCellWrap} from '../styles/components.style.ts';
import {useState} from "react";
import styled from "styled-components";

interface MandalArtGridProps {
    skinColor: string;
}

const TitleInput = styled.input`
  font-size: 24px;
  padding: 20px;
  text-align: center;
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  color: inherit;
  font-family: inherit;
`;

const MandalArtGrid = ({ skinColor }: MandalArtGridProps) => {
    const [title, setTitle] = useState('2025 만다라트 계획표');
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value); // 타이틀 입력값 상태 업데이트
    };

    const getTextColor = (bgColor: string): string => {
        // 색상 문자열을 제대로 처리하기 위해 기본값 체크
        if (typeof bgColor !== 'string') return '#000'; // 기본값은 검정색

        const hex = bgColor.replace('#', '');
        const rgb = parseInt(hex, 16); // 16진수 색상값을 RGB로 변환
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;

        // 색상의 밝기 계산 (조도)
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return brightness > 128 ? '#000' : '#fff'; // 밝으면 검정색, 어두우면 흰색
    };

    const textColor = getTextColor(skinColor);

    // 9x9 메인 그리드의 셀 생성
    const mainGrid = Array.from({ length: 9 });

    // 각 셀 내부의 3x3 서브 그리드 생성
    const subGrid = Array.from({ length: 9 });

    const LimitedSubCell = ({ placeholder }: { placeholder?: string }) => {
        const [value, setValue] = useState('');

        const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            const inputValue = event.target.value;

            // 글자 수 제한 (10자)
            if (inputValue.length <= 11) {
                setValue(inputValue);
            }
        };

        return (
            <SubCell
                value={value}
                onChange={handleChange}
                placeholder={placeholder || ''}
            />
        );
    };

    return (
        <MandalArtGridWrap style={{backgroundColor: skinColor}}>
            <TitleInput
                type="text"
                value={title}
                onChange={handleTitleChange}
                style={{color: textColor}}
            />
            <MainGrid>
                {mainGrid.map((_, mainIndex) => (
                    <SubGrid key={mainIndex}>
                        {subGrid.map((_, subIndex) => (
                            <SubCellWrap style={subIndex === 4 ? { color: textColor, backgroundColor: skinColor } : {color: skinColor}}>
                                <LimitedSubCell
                                    key={`${mainIndex}-${subIndex}`}
                                    placeholder={subIndex === 4 ? `${mainIndex + 1}` : ''}
                                />
                            </SubCellWrap>
                        ))}
                    </SubGrid>
                ))}
            </MainGrid>
        </MandalArtGridWrap>
    );
};

export default MandalArtGrid;
