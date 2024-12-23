const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Create a presentation for the Q4 sales meeting.",
        date: "2024-12-20",
        category: "Meetings",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Website Content",
        description: "Refresh the content on the company website.",
        date: "2024-12-21",
        category: "Web Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Organize Files",
        description: "Sort and archive old project files.",
        date: "2024-12-15",
        category: "Administration",
      },
    ],
  },
  {
    id: 2,
    firstname: "madan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Resolve Bug Reports",
        description: "Fix bugs reported in the last sprint.",
        date: "2024-12-16",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Team Feedback",
        description: "Collect feedback from team members about project progress.",
        date: "2024-12-19",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Plan Sprint",
        description: "Plan the tasks and goals for the next sprint.",
        date: "2024-12-22",
        category: "Agile",
      },
    ],
  },
  {
    id: 3,
    firstname: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare Market Analysis",
        description: "Analyze market trends for the upcoming year.",
        date: "2024-12-23",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit Quarterly Report",
        description: "Compile and submit the Q3 financial report.",
        date: "2024-12-15",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Inventory Check",
        description: "Perform a full inventory audit.",
        date: "2024-12-18",
        category: "Logistics",
      },
    ],
  },
  {
    id: 4,
    firstname: "Arun",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client Meeting",
        description: "Prepare agenda and presentation for client meeting.",
        date: "2024-12-20",
        category: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "System Upgrade",
        description: "Upgrade server infrastructure to the latest version.",
        date: "2024-12-17",
        category: "IT",
      },
    ],
  },
  {
    id: 5,
    firstname: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Draft Marketing Plan",
        description: "Create a marketing plan for Q1 2025.",
        date: "2024-12-25",
        category: "Marketing",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Product Demo",
        description: "Prepare and present a demo for the new product.",
        date: "2024-12-19",
        category: "Sales",
      },
    ],
  },
];

const admin = [
  {
    "id": 1,
    "email": "  ",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
     localStorage.setItem("employees" ,JSON.stringify(employees))
     localStorage.setItem("admin" ,JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  // const data  =  localStorage.getItem("employees")
  // console.log(JSON.parse(data));
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(employees, admin)

  return {employees, admin}
}







  
  


  
  