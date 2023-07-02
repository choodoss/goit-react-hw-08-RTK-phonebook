import styled from '@emotion/styled';

export const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 999;
background-color: rgba(143, 143, 143, 0.5);
`

export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 75%;
  max-width: 75%;
  box-shadow: '0px 2px 10px rgba(0, 0, 0, 0.1)';
  border-radius: '4px';
  overflow: hidden;
  outline: 'none';
`;
