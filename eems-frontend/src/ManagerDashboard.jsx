import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function ManagerDashboard() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const managerId = 1;

  // Get all exit requests
  const loadRequests = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/exit-requests"
      );

      const data = await response.json();

      setRequests(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  // Approve request
  const approveRequest = async (requestId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/exit-requests/${requestId}/approve?managerId=${managerId}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        alert("Exit request approved successfully!");
        loadRequests();
      } else {
        alert("Failed to approve request");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend");
    }
  };

  // Reject request
  const rejectRequest = async (requestId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/exit-requests/${requestId}/reject?managerId=${managerId}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        alert("Exit request rejected");
        loadRequests();
      } else {
        alert("Failed to reject request");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend");
    }
  };

  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <div className="sidebar">

        <h2>EEMS</h2>

        <p className="sidebar-title">
          Manager Portal
        </p>

        <button className="menu-button active">
          Dashboard
        </button>

        <button className="menu-button">
          Exit Requests
        </button>

        <button className="menu-button">
          Exit Interviews
        </button>

        <button className="menu-button">
          Clearance
        </button>

        <button className="menu-button">
          Employees
        </button>

      </div>


      {/* Main Content */}
      <div className="dashboard-content">

        {/* Header */}
        <div className="dashboard-header">

          <div>
            <h1>Manager Dashboard</h1>

            <p>
              Employment Exit Management System
            </p>
          </div>

          <div className="user-section">

            <span>
              Manager
            </span>

            <button
              className="logout-button"
              onClick={() => navigate("/")}
            >
              Logout
            </button>

          </div>

        </div>


        {/* Welcome */}
        <div className="welcome-section">

          <h2>
            Welcome, Manager 👋
          </h2>

          <p>
            Review and manage employee exit requests.
          </p>

        </div>


        {/* Summary Cards */}
        <div className="status-cards">

          <div className="status-card">

            <h3>Total Requests</h3>

            <div className="status-value">
              {requests.length}
            </div>

            <span>
              All exit requests
            </span>

          </div>


          <div className="status-card">

            <h3>Pending</h3>

            <div className="status-value">

              {
                requests.filter(
                  (request) =>
                    request.status === "PENDING"
                ).length
              }

            </div>

            <span>
              Awaiting approval
            </span>

          </div>


          <div className="status-card">

            <h3>Approved</h3>

            <div className="status-value">

              {
                requests.filter(
                  (request) =>
                    request.status === "APPROVED"
                ).length
              }

            </div>

            <span>
              Approved requests
            </span>

          </div>


          <div className="status-card">

            <h3>Rejected</h3>

            <div className="status-value">

              {
                requests.filter(
                  (request) =>
                    request.status === "REJECTED"
                ).length
              }

            </div>

            <span>
              Rejected requests
            </span>

          </div>

        </div>


        {/* Exit Requests */}
        <div className="dashboard-section">

          <h2>
            Employee Exit Requests
          </h2>

          {loading ? (

            <p>
              Loading requests...
            </p>

          ) : requests.length === 0 ? (

            <p>
              No exit requests available.
            </p>

          ) : (

            <div style={{ overflowX: "auto" }}>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >

                <thead>

                  <tr>

                    <th style={tableHeaderStyle}>
                      Request ID
                    </th>

                    <th style={tableHeaderStyle}>
                      Employee ID
                    </th>

                    <th style={tableHeaderStyle}>
                      Status
                    </th>

                    <th style={tableHeaderStyle}>
                      Approved By
                    </th>

                    <th style={tableHeaderStyle}>
                      Action
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {requests.map((request) => (

                    <tr key={request.request_id}>

                      <td style={tableCellStyle}>
                        {request.request_id}
                      </td>

                      <td style={tableCellStyle}>
                        {request.employee_id}
                      </td>

                      <td style={tableCellStyle}>

                        <strong>
                          {request.status}
                        </strong>

                      </td>

                      <td style={tableCellStyle}>
                        {request.approved_by || "-"}
                      </td>

                      <td style={tableCellStyle}>

                        {request.status === "PENDING" ? (

                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                            }}
                          >

                            <button
                              onClick={() =>
                                approveRequest(
                                  request.request_id
                                )
                              }
                              style={{
                                width: "auto",
                                background: "#16a34a",
                                padding: "8px 15px",
                              }}
                            >
                              Approve
                            </button>

                            <button
                              onClick={() =>
                                rejectRequest(
                                  request.request_id
                                )
                              }
                              style={{
                                width: "auto",
                                background: "#dc2626",
                                padding: "8px 15px",
                              }}
                            >
                              Reject
                            </button>

                          </div>

                        ) : (

                          <span>
                            Completed
                          </span>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}


const tableHeaderStyle = {
  textAlign: "left",
  padding: "15px",
  background: "#f1f5f9",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "15px",
  borderBottom: "1px solid #eee",
};


export default ManagerDashboard;