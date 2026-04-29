import { BarChart3, Building2, PanelRightClose, PanelRightOpen, Network, UsersRound } from "lucide-react";
import { useMemo, useState } from "react";
import { EmployeePanel, OrgChart } from "./components/OrgChart";
import { Employee, getEmployeeName, mockEmployees } from "./data/employees";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(mockEmployees[0]);
  const [isProfileOpen, setIsProfileOpen] = useState(true);

  const metrics = useMemo(
    () => [
      { label: "Employees", value: mockEmployees.length, icon: UsersRound },
      { label: "Departments", value: new Set(mockEmployees.map((employee) => employee.department)).size, icon: Building2 },
      { label: "Team leads", value: mockEmployees.filter((employee) => employee.designation.includes("Team Lead")).length, icon: Network },
      { label: "Active", value: mockEmployees.filter((employee) => employee.status === "Active").length, icon: BarChart3 },
    ],
    [],
  );

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Orchasp Limited</p>
          <h1>Organization Chart</h1>
          <p className="hero-copy">
            A clean interactive view of Orchasp reporting lines, leadership groups, and delivery teams.
          </p>
        </div>
        <div className="hero-selected">
          <div>
            <span>Focused on</span>
            <strong>{getEmployeeName(selectedEmployee)}</strong>
          </div>
          <button
            className="panel-toggle"
            type="button"
            onClick={() => setIsProfileOpen((current) => !current)}
            aria-label={isProfileOpen ? "Hide selected profile" : "Show selected profile"}
          >
            {isProfileOpen ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
            {isProfileOpen ? "Hide" : "Show"}
          </button>
        </div>
      </section>

      <section className="metrics" aria-label="Organization summary">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div className="metric-card" key={metric.label}>
              <Icon size={21} />
              <div>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            </div>
          );
        })}
      </section>

      <div className={`workspace ${isProfileOpen ? "" : "profile-panel-hidden"}`}>
        <OrgChart selectedEmployee={selectedEmployee} onSelectEmployee={setSelectedEmployee} />
        {isProfileOpen ? (
          <EmployeePanel employee={selectedEmployee} onClose={() => setIsProfileOpen(false)} />
        ) : (
          <button className="floating-profile-toggle" type="button" onClick={() => setIsProfileOpen(true)}>
            <PanelRightOpen size={18} />
            Show selected profile
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
