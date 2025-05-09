const Person = ({ name, age, role }) => {
  return (
    <>
      <h3>Person's data</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </>
  );
};
export default Person;
