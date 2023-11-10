import Ticket from "./Components/ticket/Ticket";
import Form from "./Components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Form />} />
			<Route path="/ticket" element={<Ticket />} />
			{/* other routes */}
		</Routes>
	</Router>
);

export default App;
