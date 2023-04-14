import classes from "./ErrorPage.module.css";

import { useRouteError } from "react-router";

import PageContentErrorPage from "../PageContentErrorPage/PageContentErrorPage";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error occured";
  let message = "Something went wrong, please revisit the website";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = error.status + " Page not found";
    message = "Could not find the page, please go back to the homepage";
  }

  return (
    <div className={classes.error__layout__container}>
      <Header />

      <main className={classes.main__body__container}>
        <PageContentErrorPage title={title}>
          <p className={classes.error__message}>{message}</p>
        </PageContentErrorPage>
      </main>

      <Footer />
    </div>
  );
};
export default ErrorPage;
