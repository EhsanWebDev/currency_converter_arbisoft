import React from 'react';
import styled from 'styled-components';
import { generalSizes } from '../../constants/globalStyles';

const Container = styled.View`
margin: ${props => props.mv ?? generalSizes.sizeMd}px ${props => props.mh ?? generalSizes.sizeLg}px;
padding: ${props => props.pv ?? 0}px ${props => props.ph ?? 0}px;
flex: ${props => props.flex ?? "auto"};
justify-content: ${props => props.jc ?? "flex-start"};
flex-direction: ${props => props.flex_dir ?? "row"};
align-items:${props => props.align_items ?? "stretch"};
background-color: ${props => props.bg ?? "transparent"};
height: ${props => props.height ? `${props.height}px` : "auto"};
width: ${props => props.width ? `${props.width}px` : "auto"};
border-radius: ${props => props.border_r ? `${props.border_r}px` : "0px"};
overflow:hidden
`

export default Container