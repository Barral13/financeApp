import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    width: 90%;
    margin-bottom: 15px;
`;

export const Input = styled.TextInput`
    height: 50px;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 80%;
    height: 45px;
    border-radius: 8px;
    background-color: #3b3dbf;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color:rgb(104, 104, 105);
    font-size: 17px;
    font-weight: 600;
`;