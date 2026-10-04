import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function ExitInterview() {
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username || "Employee";

  const [requestId, setRequestId] = useState(1);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (feedback.trim() === "") {
      alert("Please enter your feedback");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/exit-interviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request_id: requestId,
            feedback: feedback,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          "Exit interview submitted successfully! Interview ID: " +
          data.interview_id
        );

        navigate("/dashboard", {
          state: {
            username: username,
          },
        });
      } else {
        alert("Failed to submit exit interview");
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
          Employment Exit
        </p>

        <button
          className="menu-button"
          onClick={() =>
            navigate("/dashboard", {
              state: {
                username: username,
              },
            })
          }
        >
          Dashboard
        </button>

        <button
          className="menu-button"
          onClick={() =>
            navigate("/exit-request", {
              state: {
                username: username,
              },
            })
          }
        >
          Exit Request
        </button>

        <button className="menu-button active">
          Exit Interview
        </button>

        <button className="menu-button">
          Clearance
        </button>

        <button className="menu-button">
          Status
        </button>

      </div>


      {/* Main Content */}
      <div className="dashboard-content">

        {/* Header */}
        <div className="dashboard-header">

          <div>

            <h1>
              Exit Interview
            </h1>

            <p>
              Complete your employee exit interview
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


        {/* Interview Form */}
        <div className="dashboard-section">

          <h2>
            Employee Exit Interview
          </h2>

          <p>
            Please provide your feedback about your
            employment experience.
          </p>


          <form onSubmit={handleSubmit}>

            {/* Request ID */}
            <div className="form-group">

              <label>
                Exit Request ID
              </label>

              <input
                type="number"
                value={requestId}
                onChange={(e) =>
                  setRequestId(Number(e.target.value))
                }
              />

            </div>


            {/* Feedback */}
            <div className="form-group">

              <label>
                Feedback *
              </label>

              <textarea
                rows="7"
                placeholder="Please share your feedback..."
                value={feedback}
                onChange={(e) =>
                  setFeedback(e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  fontSize: "15px",
                  resize: "vertical",
                }}
              />

            </div>


            <button type="submit">
              Submit Exit Interview
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ExitInterview;