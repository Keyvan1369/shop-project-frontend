import { Footer } from './Footer'
import { Header } from './Header'


export const HomeLayout = ({children}) => {
  return (
    <>
    <Header />
    <div>{children}</div>
    <Footer />
    </>
  )
}
