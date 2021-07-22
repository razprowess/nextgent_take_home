
import React from 'react';

import * as S from "../../components/styled";

const StudentInfoDetailsRow = ({ label, value }: { label: string, value: string | undefined }) => (

    <S.Row>
        <S.FlexCell><S.BoldParagraph margin="small">{label}</S.BoldParagraph></S.FlexCell>
        <S.Cell><S.Paragraph style={{color:"#333"}}>{value || "-"}</S.Paragraph></S.Cell>
    </S.Row>
    
);



export default StudentInfoDetailsRow;