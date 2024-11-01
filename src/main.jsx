// https://youtu.be/Zb1zVeXLUf8

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RecommendedVideos from './components/RecommendedVideos.jsx';
import VideoPage from './components/VideoPage.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <RecommendedVideos />},
    {path: "/video/:categoryid/:id", element: <VideoPage />}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
