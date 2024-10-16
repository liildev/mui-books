import { HistoryRouterProvider, TanstackProvider, ThemeProvider } from "./providers"
import { Router } from "@/router"
import { history } from "@/lib/utils"
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <HistoryRouterProvider history={history}>
      <Toaster />
      <ThemeProvider>
        <TanstackProvider>
          <Router />
        </TanstackProvider>
      </ThemeProvider>
    </HistoryRouterProvider>
  )
}
