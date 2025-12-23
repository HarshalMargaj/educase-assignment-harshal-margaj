import { BrowserRouter, Route, Routes } from "react-router-dom";

import MobileLayout from "./components/MobileLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
	return (
		<BrowserRouter>
			<MobileLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</MobileLayout>
		</BrowserRouter>
	);
};

export default App;
