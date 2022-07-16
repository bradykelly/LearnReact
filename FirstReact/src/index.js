import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import PageBody from "./PageBody";
import "./index.css";

const Page = () => {
    return (
        <>
            <Header />
            <PageBody />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);