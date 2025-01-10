import styled from 'styled-components';

export const HeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    /* 태블릿 및 작은 화면 */
    @media (max-width: 768px) {
        padding: 10px 30px;
    }

    /* 모바일 화면 */
    @media (max-width: 480px) {
        padding: 5px 20px;
    }
`;

export const ColorPickerLabel = styled.label`
    font-size: 15px;
    
    /* 태블릿 및 작은 화면 */
    @media (max-width: 768px) {
        font-size: 10px;
    }

    /* 모바일 화면 */
    @media (max-width: 480px) {
        font-size: 8px;
    }
`;

export const ColorPicker = styled.input`
    margin-right: auto;
`;

export const MandalArtGridWrap = styled.div`
    width: 100vw;
    max-width: 100vw;
`;

// 메인 그리드 스타일 (9x9 전체)
export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3x3 구조 */
    grid-gap: 10px; /* 각 서브 그리드 간 여백 */
    width: 100%;
    max-width: 900px; /* 전체 너비 */
    margin: 0 auto;
    border-radius: 15px;
    padding: 20px;
    
    /* 태블릿 및 작은 화면 */
    @media (max-width: 768px) { 
        grid-gap: 5px;
        padding: 10px;
    }
    /* 모바일 화면 */
    @media (max-width: 480px) { 
        grid-gap: 3px;
        padding: 5px;
        max-width: 100%;
    }
`;

// 서브 그리드 스타일 (각 3x3 셀)
export const SubGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3x3 구조 */
    grid-gap: 10px;
    border-radius: 10px;
    padding: 10px;

    /* 태블릿 및 작은 화면 */
    @media (max-width: 768px) {
        grid-gap: 5px;
        padding: 8px;
    }

    /* 모바일 화면 */
    @media (max-width: 480px) {
        grid-gap: 3px;
        padding: 5px;
    }
`;

export const SubCellWrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    background: #f1f1f1;
    
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
        outline: none;
    }

    /* 태블릿 및 작은 화면 */
    @media (max-width: 768px) {
        height: 40px;
    }

    /* 모바일 화면 */
    @media (max-width: 480px) {
        height: 30px;
    }
`
// 서브 그리드의 각 셀 스타일 (텍스트 입력 가능)
export const SubCell = styled.textarea`
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 12px;
    font-weight: 800;
    font-family: 'S-CoreDream-3Light';
    max-height: calc(2 * 1.2em);
    resize: none;
    overflow: hidden;
    //text-overflow: ellipsis;
    line-height: 1.2em;
    //white-space: pre-wrap;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    //-webkit-box-orient: vertical;
    
    &::placeholder {
        transform: translateY(5px);
    }
    
    /* 태블릿 및 작은 화면 */
    @media (max-width: 768px) { 
        font-size: 10px;
    }

    /* 모바일 화면 */
    @media (max-width: 480px) {
        font-size: 8px;
    }
`;
