export const Boton = (props) => {
  const { texto, accion } = props;
  return <button onClick={accion}>{texto}</button>;
};
