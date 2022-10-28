import styled from '@emotion/styled';


export const NotificationStyle = styled.h2`
dispaly: "block";
background-color: ${p=>p.theme.colors.red};
color: ${p=>p.theme.colors.white};
width: ${p=>p.theme.sizes.small};
border-radius: ${p=>p.theme.radii.normal};
margin-left: ${p=>p.theme.sizes.auto};
margin-right: ${p=>p.theme.sizes.auto};
font-weight: ${p=>p.theme.fontWeights.bolt};
font-size: ${p=>p.theme.fontSizes.m};
`;

