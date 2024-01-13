import { QuestionContextProvider } from "@/contexts/QuestionContext";

export default function App({ Component, pageProps }) {

    return (
            <Component {...pageProps} />
    );
}