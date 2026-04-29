import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronRight,
  Mail,
  PanelRightClose,
  Phone,
  Search,
  Shield,
  Sparkles,
  UserCircle,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  departments,
  Employee,
  EmployeeNode,
  getEmployeeName,
  hierarchicalEmployees,
  mockEmployees,
} from "../data/employees";

type OrgChartProps = {
  selectedEmployee: Employee;
  onSelectEmployee: (employee: Employee) => void;
};

const employeeIndex = new Map(mockEmployees.map((employee) => [employee.id, employee]));

export function OrgChart({ selectedEmployee, onSelectEmployee }: OrgChartProps) {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const matchingIds = useMemo(() => {
    const search = query.trim().toLowerCase();
    const directMatches = mockEmployees.filter((employee) => {
      const haystack = [
        getEmployeeName(employee),
        employee.employeeId,
        employee.designation,
        employee.department,
        employee.email,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !search || haystack.includes(search);
      const matchesDepartment = department === "All" || employee.department === department;
      return matchesQuery && matchesDepartment;
    });

    const ids = new Set<string>();
    directMatches.forEach((employee) => {
      ids.add(employee.id);
      let managerId = employee.manager;
      while (managerId) {
        ids.add(managerId);
        managerId = employeeIndex.get(managerId)?.manager ?? null;
      }
    });
    return ids;
  }, [department, query]);

  const hasFilter = query.trim().length > 0 || department !== "All";
  const filteredCount = hasFilter
    ? mockEmployees.filter((employee) => matchingIds.has(employee.id)).length
    : mockEmployees.length;

  const toggleNode = (employeeId: string) => {
    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(employeeId)) {
        next.delete(employeeId);
      } else {
        next.add(employeeId);
      }
      return next;
    });
  };

  const expandAll = () => setCollapsed(new Set());
  const collapseTeams = () => {
    setCollapsed(new Set(mockEmployees.filter((employee) => employee.manager !== null).map((employee) => employee.id)));
  };

  if (hierarchicalEmployees.length === 0) {
    return <div className="empty-state">No organizational structure data found.</div>;
  }

  return (
    <section className="chart-shell" aria-label="Orchasp org chart">
      <div className="toolbar">
        <div className="search-box">
          <Search size={18} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search people, roles, departments..."
          />
        </div>

        <select value={department} onChange={(event) => setDepartment(event.target.value)} aria-label="Filter by department">
          <option value="All">All departments</option>
          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button className="ghost-button" type="button" onClick={expandAll}>
          <ChevronDown size={16} />
          Expand
        </button>
        <button className="ghost-button" type="button" onClick={collapseTeams}>
          <ChevronRight size={16} />
          Compact
        </button>
      </div>

      <div className="result-strip">
        <span>{filteredCount} visible profiles</span>
        <span>{mockEmployees.filter((employee) => employee.designation.includes("Team Lead")).length} team leads</span>
        <span>{departments.length} departments</span>
      </div>

      <div className="chart-viewport">
        <div className="chart-canvas">
          {hierarchicalEmployees.map((employee) => (
            <EmployeeTree
              key={employee.id}
              employee={employee}
              selectedId={selectedEmployee.id}
              collapsed={collapsed}
              matchingIds={matchingIds}
              hasFilter={hasFilter}
              level={0}
              onToggle={toggleNode}
              onSelectEmployee={onSelectEmployee}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type EmployeeTreeProps = {
  employee: EmployeeNode;
  selectedId: string;
  collapsed: Set<string>;
  matchingIds: Set<string>;
  hasFilter: boolean;
  level: number;
  onToggle: (employeeId: string) => void;
  onSelectEmployee: (employee: Employee) => void;
};

function EmployeeTree({
  employee,
  selectedId,
  collapsed,
  matchingIds,
  hasFilter,
  level,
  onToggle,
  onSelectEmployee,
}: EmployeeTreeProps) {
  const hasChildren = employee.children.length > 0;
  const isCollapsed = collapsed.has(employee.id) && !hasFilter;
  const isHidden = hasFilter && !matchingIds.has(employee.id);
  const visibleChildren = employee.children.filter((child) => !hasFilter || matchingIds.has(child.id));
  const isVertical = level >= 1;

  if (isHidden) {
    return null;
  }

  return (
    <div className={`tree-node ${isVertical ? "tree-node-vertical" : "tree-node-horizontal"}`}>
      <EmployeeCard
        employee={employee}
        selected={selectedId === employee.id}
        hasChildren={hasChildren}
        collapsed={isCollapsed}
        compact={isVertical}
        onToggle={() => onToggle(employee.id)}
        onSelect={() => onSelectEmployee(employee)}
      />

      {!isCollapsed && visibleChildren.length > 0 && (
        <div className={`children ${isVertical ? "children-vertical" : "children-horizontal"}`}>
          {!isVertical && <span className="drop-line" />}
          {visibleChildren.map((child, index) => (
            <div className="child-wrap" key={child.id}>
              {!isVertical && visibleChildren.length > 1 && (
                <span
                  className={`sibling-line ${
                    index === 0 ? "sibling-line-first" : index === visibleChildren.length - 1 ? "sibling-line-last" : ""
                  }`}
                />
              )}
              {!isVertical && <span className="child-line" />}
              <EmployeeTree
                employee={child}
                selectedId={selectedId}
                collapsed={collapsed}
                matchingIds={matchingIds}
                hasFilter={hasFilter}
                level={level + 1}
                onToggle={onToggle}
                onSelectEmployee={onSelectEmployee}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type EmployeeCardProps = {
  employee: EmployeeNode;
  selected: boolean;
  hasChildren: boolean;
  collapsed: boolean;
  compact: boolean;
  onToggle: () => void;
  onSelect: () => void;
};

function EmployeeCard({ employee, selected, hasChildren, collapsed, compact, onToggle, onSelect }: EmployeeCardProps) {
  const isLeader = employee.designation === "Managing Director" || employee.designation.includes("Lead");
  const isMd = employee.designation === "Managing Director";

  return (
    <article
      className={`employee-card ${compact ? "employee-card-compact" : ""} ${isLeader ? "employee-card-leader" : ""} ${
        isMd ? "employee-card-md" : ""
      } ${selected ? "employee-card-selected" : ""}`}
      onClick={onSelect}
    >
      <div className="avatar" aria-hidden="true">
        {isMd ? <Shield size={22} /> : isLeader ? <BadgeCheck size={21} /> : <UserCircle size={22} />}
      </div>

      <div className="employee-copy">
        <h3>{getEmployeeName(employee)}</h3>
        <p>{employee.designation}</p>
        <div className="employee-meta">
          <span>{employee.employeeId}</span>
          <span>{employee.children.length} reports</span>
        </div>
      </div>

      {hasChildren && (
        <button
          className="toggle-button"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onToggle();
          }}
          aria-label={collapsed ? `Expand ${getEmployeeName(employee)}` : `Collapse ${getEmployeeName(employee)}`}
        >
          {collapsed ? <ChevronRight size={15} /> : <ChevronDown size={15} />}
        </button>
      )}
    </article>
  );
}

export function EmployeePanel({ employee, onClose }: { employee: Employee; onClose: () => void }) {
  const reports = mockEmployees.filter((item) => item.manager === employee.id);
  const manager = employee.manager ? employeeIndex.get(employee.manager) : null;

  return (
    <aside className="details-panel">
      <div className="panel-glow" />
      <div className="panel-header">
        <div className="panel-avatar">
          <Sparkles size={22} />
        </div>
        <div>
          <p className="eyebrow">Selected profile</p>
          <h2>{getEmployeeName(employee)}</h2>
          <span>{employee.designation}</span>
        </div>
        <button className="close-button" type="button" onClick={onClose} aria-label="Hide selected profile">
          <PanelRightClose size={18} />
        </button>
      </div>

      <div className="detail-grid">
        <Detail icon={<Building2 size={17} />} label="Department" value={employee.department} />
        <Detail icon={<BriefcaseBusiness size={17} />} label="Employee ID" value={employee.employeeId} />
        <Detail icon={<Users size={17} />} label="Direct reports" value={String(reports.length)} />
        <Detail icon={<BadgeCheck size={17} />} label="Status" value={employee.status} />
        <Detail icon={<Mail size={17} />} label="Email" value={employee.email} />
        <Detail icon={<Phone size={17} />} label="Phone" value={employee.phone} />
      </div>

      <div className="manager-card">
        <p className="eyebrow">Reports to</p>
        <strong>{manager ? getEmployeeName(manager) : "Board / Organization"}</strong>
      </div>

      <div className="reports-list">
        <p className="eyebrow">Team</p>
        {reports.length > 0 ? (
          reports.map((report) => (
            <div key={report.id} className="report-row">
              <span>{getEmployeeName(report)}</span>
              <small>{report.designation}</small>
            </div>
          ))
        ) : (
          <div className="empty-reports">No direct reports</div>
        )}
      </div>
    </aside>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="detail-item">
      <span className="detail-icon">{icon}</span>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </div>
  );
}
