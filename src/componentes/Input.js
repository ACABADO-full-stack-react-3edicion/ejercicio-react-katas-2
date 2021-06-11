export const Input = (props) => {
  const { numero } = props;
  return <input type="text" value={numero} readOnly />;
};
