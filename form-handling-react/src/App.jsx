import RegistrationForm from "./components/RegistrationForm.js";
import FormikForm from "./components/formikForm.js"; // Import the new component
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", gap: "40px", justifyContent: "center" }}
    >
      {/* Display the Controlled Component Form */}
      <RegistrationForm />

      {/* Display the Formik Component Form */}
      <FormikForm />
    </div>
  );
}

export default App;
