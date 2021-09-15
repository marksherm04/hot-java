import React from 'react';
 
function Dashboard(props) {
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  return (
    <div className="shops">
      <h1>My Favorite Shops</h1>
    </div>
  );
}
 
export default Dashboard;