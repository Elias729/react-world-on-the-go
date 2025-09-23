import { Suspense } from "react";
import "./App.css";
import Countries from "./componets/countries/countries";

const countryPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p> Nadir bhai loading...</p>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
