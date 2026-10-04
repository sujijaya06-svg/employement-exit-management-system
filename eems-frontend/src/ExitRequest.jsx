import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function ExitRequest() {
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username || "Employee";

  const [employeeId, setEmployeeId] = useState(1);
  const [reason, setReason] = useState("");
  const [lastWorkingDate, setLastWorkingDate] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reason || !lastWorkingDate) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/exit-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employee_id: employeeId,
            approved_by: null,
            status: "PENDING",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          "Exit request submitted successfully! Request ID: " +
          data.request_id
        );

        navigate("/dashboard", {
          state: {
            username: username,
          },
        });
      } else {
        alert("Failed to submit exit request");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend");
    }
  };

  return (
    <div className="dashboard-page">

      <div className="sidebar">
        <h2>EEMS</h2>
        <p className="sidebar-title">Employment Exit</p>

        <button
          className="menu-button"
          onClick={() =>
            navigate("/dashboard", {
              state: { username: username },
            })
          }
        >
          Dashboard
        </button>

        <button className="menu-button active">
          Exit Request
        </button>

        <button className="menu-button">
          Exit Interview
        </button>

        <button className="menu-button">
          Clearance
        </button>

        <button className="menu-button">
          Status
        </button>
      </div>

      <div className="dashboard-content">

        <div className="dashboard-header">
          <div>
            <h1>Exit Request</h1>
            <p>Submit your employee exit request</p>
          </div>

          <div className="user-section">
            <span>{username}</span>

            <button
              className="logout-button"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="dashboard-section">

          <h2>Create Exit Request</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Reason for Leaving *</label>

              <input
                type="text"
                placeholder="Example: Better career opportunity"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Last Working Date *</label>

              <input
                type="date"
                value={lastWorkingDate}
                onChange={(e) =>
                  setLastWorkingDate(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Additional Comments</label>

              <textarea
                placeholder="Enter additional information"
                value={comments}
                onChange={(e) =>
                  setComments(e.target.value)
                }
                rows="5"
                style={{
                  width: "100%",
                  padding: "12px",
                }}
              />
            </div>

            <button type="submit">
              Submit Exit Request
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default ExitRequest;