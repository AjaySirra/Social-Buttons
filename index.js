const Button = (props) => {
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="like button" name="Like" />
      <Button className="comment button" name="Comment" />
      <Button className="share button" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
