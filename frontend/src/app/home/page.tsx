'use client'
import Detail from "./components/detail/Detail";
import Introduction from "./components/introduction/Introduction";
import Opening from "./components/opening/openinig";
import Registration from "./components/registration/Registration";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "@/themes/WeddingTheme";
import Events from "./components/events/Events";
import LanguageSetting from "./components/opening/LanguageSetting";

export default function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Opening/>
    <Introduction/>
    <Events/>
    <Detail/>
    <Registration/>
    </ThemeProvider>
    </>
  );
}


