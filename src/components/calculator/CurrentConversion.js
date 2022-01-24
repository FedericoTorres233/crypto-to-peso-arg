function CurrentConversion(props) {
  return (
    <div>
      <div>You are now converting</div>
      <div>{props.entered} into {props.final}</div>
    </div>
  );
}

export default CurrentConversion;
