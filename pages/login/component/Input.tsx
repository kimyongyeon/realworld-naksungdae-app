function Input(props) {
  const styleObj = {
    lineHeight: '1.25',
    color: '#55595c',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    paddingLeft: '5%',
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
    borderRadius: '0.3rem',
  };

  return (
    <input
      name={props.type}
      type={props.type}
      placeholder={props.type}
      style={styleObj}
      onChange={props.onChange}
    />
  );
}

export default Input;
