import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 15px 25px;
  justify-content: space-between;
  position: sticky;
  background-color: #fff;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const HeaderRight = styled.div`
  display: flex;
`;

export const HeaderMiddle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .MuiSvgIcon-root {
    color: gray;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    height: 40px;
  }
`;

export const HeaderSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  border-radius: 25px;
  padding: 5px;
  margin-left: 15px;
`;

export const HeaderInput = styled.input`
  border: none;
  background-color: transparent;
  outline-width: 0;
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #2e81f4;
    .MuiSvgIcon-root {
      color: #2e81f4;
    }
  }

  &:hover {
    background-color: #eff2f5;
    border-radius: 10px;
    border-bottom: none;
    align-items: center;
    .MuiSvgIcon-root {
      color: #2e81f4;
    }
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
  }
`;
