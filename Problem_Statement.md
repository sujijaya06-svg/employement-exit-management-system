# Problem Statement

## 1. Title

**Employment Exit Management System**

## 2. Domain

**HRTech / Human Resource Management**

## 3. Who is the User?

The system will be used by:

* **Employee** – submits resignation and tracks the exit process.
* **Manager** – reviews and approves/rejects resignation requests.
* **HR/Admin** – manages resignations, clearances, notice periods, assets, and exit records.

## 4. What Problem Are We Solving?

Employee exit processes are often managed using emails, spreadsheets, and manual records. This can cause delays, difficulty in tracking resignation status, incomplete clearance activities, and poor coordination between employees, managers, and HR.

There is a need for a centralized system that can manage and track the complete employee exit process efficiently.

## 5. Proposed Solution

The **Employment Exit Management System** will be a full-stack web application that centralizes the employee exit workflow.

The system will allow users to:

* Submit and manage resignation requests.
* Approve or reject resignations based on user roles.
* Track notice periods.
* Manage departmental clearance.
* Track company asset handover.
* Conduct and record exit interviews.
* Track the overall exit status.
* Manage exit-related records and documents.

The system will use secure authentication and role-based access control.

## 6. Core Entities / Database Tables

The initial database will contain the following related entities:

1. **User**
2. **Employee**
3. **Resignation**
4. **Approval**
5. **Notice Period**
6. **Clearance**
7. **Asset**
8. **Asset Handover**
9. **Exit Interview**

The final relationships will be defined during the ER-diagram and database-design phase.

## 7. User Roles & Permissions

### Employee

* Login/logout.
* Submit resignation.
* View resignation and notice-period status.
* View clearance and asset-handover status.
* Complete exit interview.

### Manager

* View employee resignation requests.
* Approve or reject resignations.
* Review employee handover and clearance.

### HR/Admin

* Manage employees and resignations.
* Manage notice periods and clearance.
* Manage assets and asset handover.
* Manage exit interviews and exit records.
* Monitor the complete exit process.

## 8. Success Criteria

The system will be considered successful when:

* Employees can securely submit and track resignations.
* Managers can approve or reject resignation requests.
* HR can manage the complete exit workflow.
* Notice periods, clearances, and asset handovers can be tracked.
* Exit interviews can be recorded.
* Role-based access works correctly.
* REST APIs are available and documented.
* Automated tests are implemented.
* The application is successfully deployed and accessible through a public URL.
* The system can support a future enhancement such as AI-based exit-feedback analysis.

## 9. Out of Scope

The initial version will not include:

* Payroll processing.
* Banking/payment processing.
* Biometric attendance.
* Complete enterprise HR/payroll management.
* Mobile application development.
* Legal or government compliance processing.

## 10. Chosen Track

**Java Track**

### Technology Stack

* **Frontend:** React.js
* **Backend:** Spring Boot 3.x
* **Language:** Java 17
* **Database:** MySQL 8
* **Authentication:** Spring Security + JWT
* **ORM:** Spring Data JPA / Hibernate
* **Testing:** JUnit 5
* **API Documentation:** Swagger / OpenAPI
* **Version Control:** Git + GitHub
* **CI/CD:** GitHub Actions
* **Deployment:** Vercel/Netlify + Render/Railway
