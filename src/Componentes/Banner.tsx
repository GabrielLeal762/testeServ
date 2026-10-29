import styled from "styled-components";
import { Theme } from "styled-components";
import Rem from "@/utils/pxToRem";
import { Box, Container, Grid } from "@mui/material";
import { StyledH1, StyledH2 } from "./typegraphyes";
import { BannerM } from "@/types";

const StyledBanner = styled.div<{ theme?: Theme }>`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${Rem(1)} solid ${(props) => props.theme.card.border};
  margin-bottom: ${Rem(10)};
  padding: ${Rem(50)} 0;
  width: 100%;
`;

function Banner(valor: BannerM) {
  const { mensagem } = valor;
  return (
    <StyledBanner>
      <Box>
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {mensagem && (
              <StyledH1 style={{ marginBottom: `${Rem(5)}` }}>
                {mensagem}
              </StyledH1>
            )}
            <StyledH2>Sistema para teste de Request</StyledH2>
          </Grid>
        </Container>
      </Box>
    </StyledBanner>
  );
}

export default Banner;
