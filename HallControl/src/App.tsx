

import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import MeetingControlPage from './modules/meeting-control/MeetingControlPage';

const App: FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MeetingControlPage />} />
        </Routes>
    </Router>
);

export default App;