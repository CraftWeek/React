import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

export function HomePage() {
  return (
    <>
    aa
    </>
  )
}


function App() {
  return (
    <>
	<BrowserRouter>
		<Routes>
			<Route path="/home" element={<HomePage />} />
		</Routes>
	</BrowserRouter>
    </>
  );
}

export default App;
