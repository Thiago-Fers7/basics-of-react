import styled from "styled-components";
import { Title as MainTitle } from '../Title'

// Herdando estilos de outro componente
export const Title = styled(MainTitle)`
  border: 1px solid black;
  width: min-content;
  white-space: nowrap;
  padding: 10px;
  border-radius: 4px;
`