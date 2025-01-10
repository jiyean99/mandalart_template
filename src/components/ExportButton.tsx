import { toPng } from 'html-to-image';
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Mungyeong-Gamhong-Apple';

  &:hover {
    background-color: #0056b3;
  }
`;

const ExportButton = () => {
    const handleExport = () => {
        const gridElement = document.getElementById('mandal-art-grid');
        if (gridElement) {
            toPng(gridElement)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = 'mandalart.png';
                    link.href = dataUrl;
                    link.click();
                })
                .catch((error) => {
                    console.error('Error exporting image:', error);
                });
        }
    };

    return <Button onClick={handleExport}>이미지로 저장</Button>;
};

export default ExportButton;
