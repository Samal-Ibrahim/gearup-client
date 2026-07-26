import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRoutes from "./routes/Index"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex w-full items-center bg-green-50 p-6 shadow-md">
        <h3 className="mx-auto">Work in progress... 🙏👇</h3>
      </div>
      <Header />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
export default App
