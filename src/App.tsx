import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRoutes from "./routes/Index"

function App() {
  // call it on form submit:
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}
export default App
