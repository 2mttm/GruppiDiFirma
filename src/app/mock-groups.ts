import {Group} from "./group";

export const groups: Group[] = [
  {
    functions: [
      {
        title: "MAV",
        functionCode: "MAV-SLIP",
        minValue: "1",
        maxValue: "500"
      },
      {
        title: "RAV",
        functionCode: "RAV-SLIP",
        minValue: "1",
        maxValue: "500"
      }
    ],
    groupName: "Group 1",
    id: 22,
    minValue: "1",
    maxValue: "500",
    users: [
      {
        userId: "09452W4295001",
        userInitials: "EB",
        fullName: "Elisa Blue"
      }
    ],
    warning: ""
  },

  {
    functions: [
      {
        title: "F24 Accountant",
        functionCode: "F24-ACCOUNTANT-PAYMENT",
        minValue: "2",
        maxValue: "100"
      },
      {
        title: "F24",
        functionCode: "F24-PAYMENT",
        minValue: "2",
        maxValue: "150"
      },
      {
        title: "Bonifico Italia",
        functionCode: "TRANSFER",
        minValue: "0",
        maxValue: "250"
      },
      {
        title: "MAV",
        functionCode: "MAV-SLIP",
        minValue: "2",
        maxValue: "150"

      },
      {
        title: "RAV",
        functionCode: "RAV-SLIP",
        minValue: "2",
        maxValue: "200"
      },

      {
        title: "Bonifico SEPA",
        functionCode: "SEPA-TRANSFER",
        minValue: "2",
        maxValue: "150"
      }
    ],
    groupName: "My group",
    id: 123,
    minValue: "1",
    maxValue: "150",
    users: [
      {
        userId: "09452W4295001",
        userInitials: "EB",
        fullName: "Elisa Blu"
      },
      {
        userId: "09452W4295002",
        userInitials: "SN",
        fullName: "Sara Neri"
      },
      {
        userId: "09452W4295003",
        userInitials: "CD",
        fullName: "Clone Dispo"
      },
    ],
    warning: "In atessa che il gruppo di firma venga approvato dai master"
  },
  {
    functions: [
      {
        title: "MAV",
        functionCode: "MAV-SLIP",
        minValue: "1",
        maxValue: "10"
      },

      {
        title: "RAV",
        functionCode: "RAV-SLIP",
        minValue: "1",
        maxValue: "10"
      }

    ],
    groupName: "Group Name",
    id: 16,
    minValue: "1",
    maxValue: "10",
    users: [
      {
        userId: "09452W4295002",
        userInitials: "SN",
        fullName: "Sara Neri"
      },
      {
        userId: "09452W4295001",
        userInitials: "EB",
        fullName: "Elisa Blu"
      },
      {
        userId: "09452W4295003",
        userInitials: "CD",
        fullName: "Clone Dispo"
      },
      {
        userId: "09452W4295010",
        userInitials: "MR",
        fullName: "Mario Rossi"
      }
    ],
    warning: ""
  },
  {
    functions: [
      {
        title: "Bonifico SEPA",
        functionCode: "SEPA-TRANSFER",
        minValue: "null",
        maxValue: "null"
      }
    ],
    groupName: "Gruppo firma Sepa Transfer",
    id: 71,
    minValue: "50000",
    maxValue: "100000",
    users: [
      {
        userId: "09452W4295001",
        userInitials: "EB",
        fullName: "Elisa Blu"
      },
      {
        userId: "09452W4295002",
        userInitials: "SN",
        fullName: "Sara Neri"
      }
    ],
    warning: "In atessa che il gruppo di firma venga approvato dai master"
  }
]
