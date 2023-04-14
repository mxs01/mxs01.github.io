import classes from "./PageContentErrorPage.module.css";

const PageContentErrorPage = (props) => {
  return (
    <div className={classes.page__container}>
      <h1 className={classes.page__title}>{props.title}</h1>
      {props.children}
    </div>
  );
};
export default PageContentErrorPage;
