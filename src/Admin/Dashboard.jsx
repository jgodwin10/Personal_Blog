import React from 'react'
import Sidebar from './Sidebar';

const Dashboard = ({sidebar}) => {
  return (
    <div className="text-white">
      <Sidebar sidebar={sidebar} />
    </div>
  );
}

export default Dashboard
