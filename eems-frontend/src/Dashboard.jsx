import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function Dashboard() {

  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username || "Employee";


  return (

    <div className="dashboard-page">

      {/* ================= SIDEBAR ================= */}

      <div className="sidebar">

        <h2>EEMS</h2>

        <p className="sidebar-title">
          Employment Exit
        </p>


        {/* Dashboard */}

        <button
          className="menu-button active"
          onClick={() =>
            navigate("/dashboard", {
              state: {
                username: username
              }
            })
          }
        >
          Dashboard
        </button>


        {/* Exit Request */}

        <button
          className="menu-button"
          onClick={() =>
            navigate("/exit-request", {
              state: {
                username: username
              }
            })
          }
        >
          Exit Request
        </button>


        {/* Exit Interview */}

        <button
          className="menu-button"
          onClick={() =>
            navigate("/exit-interview", {
              state: {
                username: username
              }
            })
          }
        >
          Exit Interview
        </button>


        {/* Clearance */}

        <button
          className="menu-button"
          onClick={() => {
            alert("Clearance module will be available soon.");
          }}
        >
          Clearance
        </button>


        {/* Status */}

        <button
          className="menu-button"
          onClick={() => {
            alert("Status page will be available soon.");
          }}
        >
          Status
        </button>


        {/* Profile */}

        <button
          className="menu-button"
          onClick={() => {
            alert("Profile page will be available soon.");
          }}
        >
          Profile
        </button>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="dashboard-content">


        {/* HEADER */}

        <div className="dashboard-header">

          <div>

            <h1>
              Employment Exit Management System
            </h1>

            <p>
              Employee Exit Management Portal
            </p>

          </div>


          <div className="user-section">

            <span>
              {username}
            </span>


            <button
              className="logout-button"
              onClick={() => navigate("/")}
            >
              Logout
            </button>

          </div>

        </div>


        {/* ================= WELCOME ================= */}

        <div className="welcome-section">

          <h2>
            Welcome back, {username} 👋
          </h2>

          <p>
            Track and manage your employee exit process from here.
          </p>

        </div>


        {/* ================= STATUS CARDS ================= */}

        <div className="status-cards">


          {/* Exit Request */}

          <div className="status-card">

            <h3>
              Exit Request
            </h3>

            <div className="status-value">
              Submitted
            </div>

            <span>
              Request #101
            </span>

          </div>


          {/* Exit Interview */}

          <div className="status-card">

            <h3>
              Exit Interview
            </h3>

            <div className="status-value">
              Pending
            </div>

            <span>
              Interview not completed
            </span>

          </div>


          {/* Clearance */}

          <div className="status-card">

            <h3>
              Clearance
            </h3>

            <div className="status-value">
              2 / 4
            </div>

            <span>
              Departments cleared
            </span>

          </div>


          {/* Overall Status */}

          <div className="status-card">

            <h3>
              Overall Status
            </h3>

            <div className="status-value">
              In Progress
            </div>

            <span>
              Exit process ongoing
            </span>

          </div>

        </div>


        {/* ================= RECENT EXIT REQUEST ================= */}

        <div className="dashboard-section">

          <h2>
            Recent Exit Request
          </h2>


          <div className="request-box">


            <div>

              <strong>
                Request ID
              </strong>

              <p>
                #101
              </p>

            </div>


            <div>

              <strong>
                Submitted Date
              </strong>

              <p>
                20 September 2026
              </p>

            </div>


            <div>

              <strong>
                Reason
              </strong>

              <p>
                Career Opportunity
              </p>

            </div>


            <div>

              <strong>
                Status
              </strong>

              <p className="pending-status">
                In Progress
              </p>

            </div>

          </div>

        </div>


        {/* ================= EXIT PROCESS ================= */}

        <div className="dashboard-section">

          <h2>
            Exit Process
          </h2>


          <div className="process-container">


            {/* Step 1 */}

            <div className="process-step completed">

              <div className="step-circle">
                ✓
              </div>

              <p>
                Exit Request
              </p>

            </div>


            <div className="process-line"></div>


            {/* Step 2 */}

            <div className="process-step">

              <div className="step-circle">
                2
              </div>

              <p>
                Manager Approval
              </p>

            </div>


            <div className="process-line"></div>


            {/* Step 3 */}

            <div className="process-step">

              <div className="step-circle">
                3
              </div>

              <p>
                Exit Interview
              </p>

            </div>


            <div className="process-line"></div>


            {/* Step 4 */}

            <div className="process-step">

              <div className="step-circle">
                4
              </div>

              <p>
                Clearance
              </p>

            </div>


            <div className="process-line"></div>


            {/* Step 5 */}

            <div className="process-step">

              <div className="step-circle">
                5
              </div>

              <p>
                Completed
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;