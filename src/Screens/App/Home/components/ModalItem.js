import React from 'react';
import Container from '../../../../components/StyledComponents/Container';
import CustomBtn from '../../../../components/StyledComponents/CustomBtn';
import IonIcon from "react-native-vector-icons/Ionicons"
import CustomText from '../../../../components/StyledComponents/CustomText';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';


const ModalBtn = styled(CustomBtn)`
flex-direction:row;
justify-content:space-between;
flex:1
`;
const Icon = styled(IonIcon)`
color:${props => props.isDark ? colors.parrot : colors.blue};
`


const ModalItem = ({ item, isDark, onPress }) => {
    const { name, identifier, selected } = item || {};
    return (
        <Container>
            <ModalBtn onPress={() => onPress(item)}>
                <CustomText>{name} - {identifier}</CustomText>
                {selected && <Icon isDark={isDark} name="checkmark-circle" size={20} />}
            </ModalBtn>
        </Container>
    )
}

export default ModalItem;