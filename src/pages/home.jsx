import React from "react";
import CreateInvoice from "../components/CreateInvoice";
import Calculation from "../components/Calculation";
import Graph from "../components/graph";
import Invoices from "../components/Invoices";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="h-screen fixed w-full overflow-scroll">
      <Header />
      <CreateInvoice />
      <Calculation />
      <Graph />
      <Invoices />
      <Footer />
    </div>
  );
}

export default Home;
