import styled from "styled-components";


const UserContainer = styled.div`
    color: white;
    height: 120px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(217, 206, 243, 0.4);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
    border: 2px solid white;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const UserInfo = () => {
    return (
        <UserContainer>
            <h3>
                Пользователь
            </h3>
            <br />
            <h4>
                Бебров Петр Иванович
            </h4>
        </UserContainer>
    )
}