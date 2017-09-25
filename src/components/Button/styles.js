import styled from 'styled-components';
import { Palette, StationFive } from 'theme';

export default Component => styled(Component)`
  padding: 7px 10px;
  color: ${Palette.white};
  border: none;
  transition: background-color 0.3s ease-in;
  
  &--primary {
    background-color: ${StationFive.colours.primary};
  }
  
  &:hover {
   background-color: ${StationFive.colours.secondary}; 
  }
`;
