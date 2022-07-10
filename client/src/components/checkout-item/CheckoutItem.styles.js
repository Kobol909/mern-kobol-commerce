import styled from 'styled-components';
import { Colors } from '../../resources/themes/Colors';

export const CheckoutItemContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${Colors.neutral[900]};
  display: flex;
  font-size: 20px;
  min-height: 100px;
  padding: 15px 0;
  width: 100%;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;
  width: 23%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  padding-left: 12px;
`;
