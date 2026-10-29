import styled from "styled-components";
import { Theme } from "styled-components";
import { Table } from "@/types";
import Rem from "@/utils/pxToRem";

const StyledTable = styled.div<{ theme?: Theme }>`
  overflow-x: auto;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    td,
    th {
      height: ${Rem(48)};
      padding: ${Rem(20)};
      text-align: left;
    }

    th {
      font-weight: 600;

      color: ${(props) => props.theme.typographies.subtitle};
    }

    td {
      border-bottom: ${Rem(1)} solid ${(props) => props.theme.appDefaultStroke};
    }
  }
`;

function Tabela(props: Table) {
  const { headers, rows } = props;

  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rows, rowIndex) => (
            <tr key={rowIndex}>
              {rows.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
}

export default Tabela;
