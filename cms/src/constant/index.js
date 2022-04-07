export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 150,
    fixed: "left",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "UserName",
    dataIndex: "username",
    key: "username",
    fixed: "left",
    width: 120,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 200,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 180,
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    width: 120,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 260,
    render: ({ street, suite, city, zipcode }) => (
      <p>
        {street} {suite} {city} {zipcode}
      </p>
    ),
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    render: ({ name }) => <p>{name}</p>,
  },
];
