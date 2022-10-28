import styled from '@emotion/styled';


export const StyleStatistic  = styled.button`
display: inline-flex;
align-items: center;
gap: ${p=>p.theme.space[2]}px;
margin: ${p=>p.theme.space[0]};
padding-top: ${p=>p.theme.space[4]}px;
padding-bottom: ${p=>p.theme.space[4]}px;
padding-left: ${p=>p.theme.space[4]}px;
padding-right:  ${p=>p.theme.space[4]}px;
border: ${p=>p.theme.borders.normal};
border-radius: ${p=>p.theme.radii.normal};
background-color: ${p=>p.disabled? p.theme.colors.green: p.theme.colors.blue };
color: ${p=>p.theme.colors.white};


:hover: not(:disabled), 
:focus: not(:disabled) {
    background-color: ${p=>p.theme.colors.red};
}
`;