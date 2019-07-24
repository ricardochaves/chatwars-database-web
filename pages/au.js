import { withRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import AuComponent from "../components/Au";
import defaultPage from "../hocs/defaultPage";

const au = withRouter(({ router: { query } }) => (
  <AuComponent isAuth={PropTypes.bool.isRequired} id={query.lot_id} />
));

export default defaultPage(au);
