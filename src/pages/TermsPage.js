import Terms from "../components/terms/Terms";
import PageHeader from "../components/common/PageHeader";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";

const TermsPage = (props) => {
  return (
    <>
      <Topbar />

      <PageHeader image="terms.png" title="Terms & Conditions" />
      <Terms />
      <Footer />
    </>
  );
};

export default TermsPage;
