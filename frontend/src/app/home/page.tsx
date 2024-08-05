'use client'
import Detail from "./components/detail/Detail";
import Introduction from "./components/introduction/Introduction";
import Opening from "./components/opening/openinig";
import Registration from "./components/registration/Registration";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "@/themes/WeddingTheme";

export default function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Opening/>
    <Introduction/>
    <Detail/>
    <Registration/>
    </ThemeProvider>
    </>
  );
}


