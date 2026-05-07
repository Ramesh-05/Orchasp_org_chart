export type Employee = {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  employmentType: string;
  grade?: string;
  joiningDate: string;
  status: "Active" | "Inactive";
  manager: string | null;
};

export type EmployeeNode = Employee & {
  children: EmployeeNode[];
};

export const mockEmployees: Employee[] = [
  { id: "EMP001", employeeId: "IND001", firstName: "P Chandra", lastName: "Shekar", email: "pcs@orchasp.com", phone: "+91 ", department: "Executive Management", designation: "Managing Director", employmentType: "Permanent", grade: "JL7", joiningDate: "2015-06-01", status: "Active", manager: null },
  { id: "EMP002", employeeId: "IND002", firstName: "Madhuri", lastName: "", email: "hr@orchasp.com", phone: "+91 98765 43211", department: "Human Resources", designation: "HR Manager", employmentType: "Permanent", grade: "JL5", joiningDate: "2016-03-15", status: "Active", manager: "EMP001" },
  { id: "EMP003", employeeId: "IND003", firstName: "Chitti", lastName: "Babu", email: "chittibabu@orchasp.com", phone: "+91 98765 43212", department: "Operations", designation: "Manager", employmentType: "Permanent", grade: "JL5", joiningDate: "2017-05-20", status: "Active", manager: "EMP001" },
  { id: "EMP004", employeeId: "IND004", firstName: "Saradha sharma", lastName: "", email: "saradha@orchasp.com", phone: "+91 98765 43213", department: "Finance & Admin", designation: "Accountant & Receptionist", employmentType: "Permanent", grade: "JL4", joiningDate: "2018-02-10", status: "Active", manager: "EMP001" },
  { id: "EMP_ENG_HEAD", employeeId: "IND_ENG", firstName: "Engineering", lastName: "Department", email: "engineering@orchasp.com", phone: "+91", department: "Engineering", designation: "Department Head", employmentType: "Permanent", grade: "JL5", joiningDate: "2020-01-01", status: "Active", manager: "EMP003" },
  { id: "EMP_DEV_HEAD", employeeId: "IND_DEV", firstName: "Development", lastName: "Team", email: "development@orchasp.com", phone: "+91", department: "Engineering", designation: "Development Lead", employmentType: "Permanent", grade: "JL5", joiningDate: "2020-01-01", status: "Active", manager: "EMP_ENG_HEAD" },
  { id: "EMP_QA_HEAD", employeeId: "IND_QA", firstName: "QA", lastName: "Team", email: "qa@orchasp.com", phone: "+91", department: "Engineering", designation: "QA Lead", employmentType: "Permanent", grade: "JL5", joiningDate: "2020-01-01", status: "Active", manager: "EMP_ENG_HEAD" },
  { id: "EMP006", employeeId: "IND005", firstName: "Ramesh", lastName: "", email: "rameshbabu.k@orchasp.com", phone: "+91 98765 43215", department: "Engineering", designation: "Team Lead", employmentType: "Permanent", grade: "JL5", joiningDate: "2020-01-10", status: "Active", manager: "EMP_DEV_HEAD" },
  { id: "EMP005", employeeId: "IND006", firstName: "Nagendra", lastName: "", email: "nagendra.b@orchasp.com", phone: "+91 98765 43214", department: "Engineering", designation: "Team Lead", employmentType: "Permanent", grade: "JL5", joiningDate: "2019-08-15", status: "Active", manager: "EMP_DEV_HEAD" },
  { id: "EMP007", employeeId: "IND007", firstName: "Anil", lastName: "", email: "anil@orchasp.com", phone: "+91 98765 43216", department: "Engineering", designation: "Team Lead", employmentType: "Permanent", grade: "JL5", joiningDate: "2020-05-20", status: "Active", manager: "EMP_DEV_HEAD" },
  { id: "EMP008", employeeId: "IND008", firstName: "Saidarao", lastName: "", email: "saidarao@orchasp.com", phone: "+91 98765 43217", department: "Engineering", designation: "Team Lead", employmentType: "Permanent", grade: "JL5", joiningDate: "2021-02-15", status: "Active", manager: "EMP_DEV_HEAD" },
  { id: "EMP009", employeeId: "IND009", firstName: "Laksmi", lastName: "", email: "laksmi@orchasp.com", phone: "+91 90000 00009", department: "Human Resources", designation: "Office Maintenance", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP002", status: "Active" },
  { id: "EMP010", employeeId: "IND010", firstName: "Poonam", lastName: "", email: "poonam@orchasp.com", phone: "+91 90000 00010", department: "Human Resources", designation: "Office Cleaning", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP002", status: "Active" },
  { id: "EMP011", employeeId: "IND011", firstName: "Prakash", lastName: "", email: "prakash@orchasp.com", phone: "+91 90000 00011", department: "Human Resources", designation: "Gate Keeper", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP002", status: "Active" },
  { id: "EMP_NET_HEAD", employeeId: "IND_NET", firstName: "Network", lastName: "Department", email: "network@orchasp.com", phone: "+91", department: "Operations", designation: "Network Lead", employmentType: "Permanent", grade: "JL5", joiningDate: "2020-01-01", status: "Active", manager: "EMP003" },
  { id: "EMP012", employeeId: "IND012", firstName: "Manish", lastName: "", email: "manish@orchasp.com", phone: "+91 90000 00012", department: "Operations", designation: "Network Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP_NET_HEAD", status: "Active" },
  { id: "EMP013", employeeId: "IND013", firstName: "Rakesh", lastName: "", email: "rakesh@orchasp.com", phone: "+91 90000 00013", department: "Operations", designation: "Network Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP_NET_HEAD", status: "Active" },
  { id: "EMP014", employeeId: "IND014", firstName: "Raju", lastName: "", email: "raju@orchasp.com", phone: "+91 90000 00014", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP005", status: "Active" },
  { id: "EMP014A", employeeId: "IND014A", firstName: "Praveen", lastName: "", email: "", phone: "+91 90000 00014", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP007", status: "Active" },
  { id: "EMP014B", employeeId: "IND014B", firstName: "Prem kumar", lastName: "", email: "prem@orchasp.com", phone: "+91 90000 00014", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2021-03-01", manager: "EMP005", status: "Active" },
  { id: "EMP015", employeeId: "IND015", firstName: "Priyanka", lastName: "", email: "priyanka@orchasp.com", phone: "+91 90000 00015", department: "QA", designation: "Manual Test Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP_QA_HEAD", status: "Active" },
  { id: "EMP016", employeeId: "IND016", firstName: "Thirumal Rao", lastName: "", email: "thirumal@orchasp.com", phone: "+91 90000 00016", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP005", status: "Active" },
  { id: "EMP017", employeeId: "IND017", firstName: "Mani Varma", lastName: "", email: "manivarma@orchasp.com", phone: "+91 90000 00017", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP005", status: "Active" },
  { id: "EMP018", employeeId: "IND018", firstName: "Nageswara Rao", lastName: "", email: "nageswararao@orchasp.com", phone: "+91 90000 00018", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP005", status: "Active" },
  { id: "EMP019", employeeId: "IND019", firstName: "Dinesh", lastName: "", email: "dinesh@orchasp.com", phone: "+91 90000 00019", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP005", status: "Active" },
  { id: "EMP020", employeeId: "IND020", firstName: "Asha", lastName: "", email: "asha@orchasp.com", phone: "+91 90000 00020", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP021", employeeId: "IND021", firstName: "Raghu", lastName: "B", email: "raghu.b@orchasp.com", phone: "+91 90000 00021", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_1", employeeId: "IND022_1", firstName: "V. Adithi", lastName: "", email: "adithi@orchasp.com", phone: "+91 90000 22001", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_2", employeeId: "IND022_2", firstName: "Jai", lastName: "Prakash", email: "jaiprakash@orchasp.com", phone: "+91 90000 22002", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_3", employeeId: "IND022_3", firstName: "Archana", lastName: "", email: "archana@orchasp.com", phone: "+91 90000 22003", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_4", employeeId: "IND022_4", firstName: "Navakanth", lastName: "", email: "navakanth@orchasp.com", phone: "+91 90000 22004", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_5", employeeId: "IND022_5", firstName: "Swetha", lastName: "", email: "swetha@orchasp.com", phone: "+91 90000 22005", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_6", employeeId: "IND022_6", firstName: "Satyavathi", lastName: "", email: "satyavathi@orchasp.com", phone: "+91 90000 22006", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_7", employeeId: "IND022_7", firstName: "Charitha", lastName: "", email: "charitha@orchasp.com", phone: "+91 90000 22007", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_8", employeeId: "IND022_8", firstName: "Mallikarjuna", lastName: "", email: "malli@orchasp.com", phone: "+91 90000 22008", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_9", employeeId: "IND022_9", firstName: "Yashwanth", lastName: "", email: "yashwanth@orchasp.com", phone: "+91 90000 22009", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_10", employeeId: "IND022_10", firstName: "Rahul", lastName: "kali", email: "rahulkali@orchasp.com", phone: "+91 90000 22008", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP022_11", employeeId: "IND022_11", firstName: "Chandra", lastName: "Mahesh", email: "chandramah@orchasp.com", phone: "+91 90000 22009", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-01-01", manager: "EMP006", status: "Active" },
  { id: "EMP023_1", employeeId: "IND023_1", firstName: "Akhila", lastName: "", email: "akhila@orchasp.com", phone: "+91 90000 23001", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP023_2", employeeId: "IND023_2", firstName: "Keerthana", lastName: "", email: "keerthana@orchasp.com", phone: "+91 90000 23002", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP023_3", employeeId: "IND023_3", firstName: "Navaneeswara", lastName: "Rao", email: "navaneeswara@orchasp.com", phone: "+91 90000 23003", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP023_4", employeeId: "IND023_4", firstName: "Kavya Sri", lastName: "", email: "kavyasri@orchasp.com", phone: "+91 90000 23004", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP023_5", employeeId: "IND023_5", firstName: "Manoj", lastName: "Davu", email: "manoj.d@orchasp.com", phone: "+91 90000 23005", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP023_6", employeeId: "IND023_6", firstName: "Ranjith", lastName: "Yadav", email: "ranjith.y@orchasp.com", phone: "+91 90000 23006", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP023_7", employeeId: "IND023_7", firstName: "Shruthi", lastName: "Gadam", email: "shruthi.g@orchasp.com", phone: "+91 90000 23007", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP024_1", employeeId: "IND024_1", firstName: "Prajwalarani", lastName: "", email: "prajwalarani@orchasp.com", phone: "+91 90000 24001", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP008", status: "Active" },
  { id: "EMP024_2", employeeId: "IND024_2", firstName: "Rakesh", lastName: "", email: "rakesh.s@orchasp.com", phone: "+91 90000 24002", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP008", status: "Active" },
  { id: "EMP024_3", employeeId: "IND024_3", firstName: "Mahesh", lastName: "", email: "mahesh@orchasp.com", phone: "+91 90000 24003", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP008", status: "Active" },
  { id: "EMP024_4", employeeId: "IND024_4", firstName: "Srujan", lastName: "", email: "srujan@orchasp.com", phone: "+91 90000 24004", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP008", status: "Active" },
  { id: "EMP024_5", employeeId: "IND024_5", firstName: "Sahithi", lastName: "", email: "sahithi@orchasp.com", phone: "+91 90000 24005", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP015", status: "Active" },
  { id: "EMP024_6", employeeId: "IND024_6", firstName: "Sai Kiran", lastName: "", email: "saikiran@orchasp.com", phone: "+91 90000 24006", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP008", status: "Active" },
  { id: "EMP024_7", employeeId: "IND024_7", firstName: "Ganesh", lastName: "", email: "ganesh.s@orchasp.com", phone: "+91 90000 24007", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP008", status: "Active" },
  { id: "EMP024_8", employeeId: "IND024_8", firstName: "Sorabh", lastName: "", email: "sorabh@orchasp.com", phone: "+91 90000 24008", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-10-01", manager: "EMP008", status: "Active" },
  { id: "EMP024_9", employeeId: "IND024_9", firstName: "Akhila", lastName: "V", email: "raju@orchasp.com", phone: "+91 90000 00014", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP007", status: "Active" },
  { id: "EMP024_10", employeeId: "IND024_10", firstName: "Sowmya", lastName: "", email: "raju@orchasp.com", phone: "+91 90000 00014", department: "Engineering", designation: "Associate Software Engineer", employmentType: "Permanent", joiningDate: "2021-01-01", manager: "EMP007", status: "Active" },
  { id: "EMP024_11", employeeId: "IND024_11", firstName: "Ashish", lastName: "G", email: "ashish.g@orchasp.com", phone: "+91 90000 23006", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP007", status: "Active" },
  { id: "EMP024_12", employeeId: "IND024_12", firstName: "Hari", lastName: "Priya", email: "hari.p@orchasp.com", phone: "+91 90000 23006", department: "Engineering", designation: "Intern Trainees", employmentType: "Permanent", joiningDate: "2023-06-01", manager: "EMP005", status: "Active" },
];

export const getEmployeeName = (employee: Pick<Employee, "firstName" | "lastName">) =>
  `${employee.firstName} ${employee.lastName}`.replace(/\s+/g, " ").trim();

export const buildEmployeeTree = (items: Employee[], managerId: string | null = null): EmployeeNode[] =>
  items
    .filter((item) => item.manager === managerId)
    .map((item) => ({
      ...item,
      children: buildEmployeeTree(items, item.id),
    }));

export const hierarchicalEmployees = buildEmployeeTree(mockEmployees);

export const departments = Array.from(new Set(mockEmployees.map((employee) => employee.department))).sort();
