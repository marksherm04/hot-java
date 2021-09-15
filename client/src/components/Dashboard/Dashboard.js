import React from 'react';
 
function Dashboard(props) {
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  class MyForm extends React.Component {}
  return (
    <div className="shops">
      <h1>My Favorite Shops</h1>
      <form>
        Hello
      </form>
    </div>
    
  );
}
 
export default Dashboard;