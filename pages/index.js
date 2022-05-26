import Layout from "../src/app/components/Layout"
import Header from "../src/app/components/Header"
import Services from "../src/app/components/Services"
import Location from "../src/app/components/Location"
import Footer from "../src/app/components/Footer"
import serviceSource from "../src/app/assets/services.json"
import footerSource from "../src/app/assets/footer.json"

export default function LandingPage() {
  return (
    <Layout pageTitle="Solar With Garrett">
      <Header />
      <Services />
      <Location />
      <Footer />
    </Layout>
  )
}

export function getStaticProps() {
  // in a real-world scenario retrieve the service list
  // by calling an API or performing a query
  const services = serviceSource

  // retrieving the footer link list ...
  const footerLinks = footerSource

  return {
    props: {
      services: services,
      footerLinks: footerLinks,
    },
    revalidate: 60,
  }
}
