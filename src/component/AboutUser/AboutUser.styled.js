import styled from '@emotion/styled';

export const CloseIcon = styled('button')`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
  font-size: 24px;
  
  &:hover {
    color: #1976d2;
  }
`;

export const ModalContainer = styled('div')`
  padding: 15px;
`;