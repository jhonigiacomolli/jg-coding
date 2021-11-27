import { ReactElement } from 'react'
import { Chat } from 'components/chat'
import { AppRoutes } from 'routes'
import { BrowserRouter } from 'react-router-dom'
import { BackToTop } from 'components/back-to-top'
import { Header } from 'components/header'
import { Foooter } from 'components/footer'

export const Root = (): ReactElement => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Foooter />
      <BackToTop />
      <Chat />
    </BrowserRouter>
  )
}
