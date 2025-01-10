import { useState } from 'react';
import MandalArtGrid from './components/MandalArtGrid';
import ExportButton from './components/ExportButton';
import {ColorPicker, ColorPickerLabel, HeaderWrap} from "./styles/components.style.ts";

const App = () => {
    const [skinColor, setSkinColor] = useState('#a7c4e2'); // 기본 색상값 설정 #a7c4e2


    const handleSkinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSkinColor(event.target.value); // 색상 변경 핸들러
    };

    return (
        <div>
            <HeaderWrap>
                <ColorPickerLabel htmlFor="skin-selector">Select Skin Color:</ColorPickerLabel>
                <ColorPicker type="color" id="skin-selector" value={skinColor} onChange={handleSkinChange}/>

                <ExportButton />
            </HeaderWrap>

            <div id="mandalart-grid">
                {/* MandalArtGrid에 skinColor 전달 */}
                <MandalArtGrid skinColor={skinColor} />
            </div>
        </div>
    );
};

export default App;
