import React from 'react';
import types from "prop-types"
import IonIcon from "react-native-vector-icons/Ionicons"
import styled from 'styled-components';

import Container from '../../../../components/StyledComponents/Container';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';
import CustomText from '../../../../components/StyledComponents/CustomText';


import { colors } from '../../../../constants/colors';
import { generalSizes } from '../../../../constants/globalStyles';

const ModalBtn = styled(CustomBtn)`
flex-direction:row;
justify-content:space-between;
flex:1
`;
const Icon = styled(IonIcon)`
color:${props => props.isDark ? colors.light_green : colors.blue};
`


const ModalItem = ({ item, isDark, onPress }) => {
    const { name, identifier, selected } = item || {};
    return (
        <Container>
            <ModalBtn onPress={() => onPress(item)}>
                <CustomText>{identifier} - {name}</CustomText>
                {selected && <Icon isDark={isDark} name="checkmark-circle" size={generalSizes.iconSize_med} />}
            </ModalBtn>
        </Container>
    )
}

ModalItem.propTypes = {
    isDark: types.bool,
    item: types.object,
    onPress: types.func
}


export default ModalItem;