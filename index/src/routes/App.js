import React, { Suspense, useEffect,useState } from "react";
import { Switch, Route, BrowserRouter, Redirect,} from "react-router-dom";
import Loader from "../app/loader";
import Header from "../app/layouts/header/index";
import Footer from "../app/layouts/Footer/index";
import { ComingSoon } from "../app/components/ComingSoon";
import DelegateDashboard from "../app/components/Dashboard/DelegateDashboard/Dashboard";
import CADashboard from "../app/components/Dashboard/CADashboard/Dashboard";
import AdminDashboard from "../app/components/Dashboard/AdminDashboard/index";
import UploadTaskForm from "../app/admin/UploadTaskForm";
import RegisterCAForm from "../app/admin/RegisterCA";
import CAList from "../app/admin/CAList";
import { connect } from "react-redux";
import GetAllRegistration from "../app/admin/GetAllRegistration";
import HeaderTop from "../app/layouts/header/UpdatedPage/Components/HeaderTop";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useLocation } from "react-router-dom";
import "./App.css"
const Home = React.lazy(() => import("../app/components/Home"));
const About = React.lazy(() => import("../app/components/About"));
const SignUpForm = React.lazy(() => import("../app/auth/SignUpForm"));
const LoginForm = React.lazy(() => import("../app/auth/LoginForm"));

const EmailSend = React.lazy(() =>
  import("../app/auth/forgotPassword/EmailSend")
);
const ResetPassword = React.lazy(() =>
  import("../app/auth/forgotPassword/ResetPassword")
);

const Template = React.lazy(() =>
  import("../app/components/SpecificEvents/Template")
);
const MUN = React.lazy(() => import("../app/components/SpecificEvents/MUN"));
const PreSummitEvents = React.lazy(() =>
  import("../app/components/SpecificEvents/PreSummitEvents")
);
const PolicyCase = React.lazy(() =>
  import("../app/components/SpecificEvents/PolicyCase")
);
const CaseStudy = React.lazy(() =>
  import("../app/components/SpecificEvents/CaseStudy")
);
const ActionPlan = React.lazy(() =>
  import("../app/components/SpecificEvents/ActionPlan")
);
const Workshop = React.lazy(() =>
  import("../app/components/SpecificEvents/Workshops")
);
const Innovision = React.lazy(() =>
  import("../app/components/SpecificEvents/Innovision")
);
const TurnCoat = React.lazy(() =>
  import("../app/components/SpecificEvents/TurnCoat")
);
const TreasureHunt = React.lazy(() =>
  import("../app/components/SpecificEvents/TreasureHunt")
);
const Sociothon = React.lazy(() =>
  import("../app/components/SpecificEvents/Sociothon")
);
const Abhivyakti = React.lazy(() =>
  import("../app/components/SpecificEvents/Abhivyakti")
);

const ProfileCompletionForm = React.lazy(() =>
  import("../app/auth/ProfileCompletionForm")
);
const Contact = React.lazy(() => import("../app/components/ContactUs"));
const Events = React.lazy(() => import("../app/components/Events"));
const Partner = React.lazy(() => import("../app/components/Partners"));
const Speakers = React.lazy(() => import("../app/components/Speakers"));
//const Profile = React.lazy(() => import("../app/components/Dashboard/ProfileNew") )
const SpecificEvents = React.lazy(() =>
  import("../app/components/SpecificEvents/ExecutiveBoard")
);

const App = ({ user }) => {

// console.log(window.location.pathname)
// var [userLocation,setUserLocation]  =  useState("/");

// useEffect(()=>{
//   setUserLocation(window.location.pathname)
//   console.log(window.location.pathname)

// });


  return (
    <BrowserRouter>
      {/* <HeaderTop/>
      <Header /> */}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={["/home", "/"]} component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/partners" component={Partner} />
          <Route exact path="/events" component={Events} />

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />

          <Route exact path="/forgotPassword" component={EmailSend} />

          <Route exact path="/template" component={Template}></Route>
          <Route exact path="/events/MUN" component={MUN}></Route>
          <Route
            exact
            path="/events/PreSummitEvents"
            component={PreSummitEvents}
          ></Route>
          <Route exact path="/events/CaseStudy" component={CaseStudy}></Route>
          <Route exact path="/events/PolicyCase" component={PolicyCase}></Route>
          <Route exact path="/events/ActionPlan" component={ActionPlan}></Route>
          <Route exact path="/events/Workshop" component={Workshop}></Route>
          <Route exact path="/events/Sociothon" component={Sociothon}></Route>
          <Route
            exact
            path="/events/SocialConclave"
            component={ComingSoon}
          ></Route>
          <Route exact path="/events/Innovision" component={Innovision}></Route>
          <Route
            exact
            path="/events/TreasureHunt"
            component={TreasureHunt}
          ></Route>
          <Route exact path="/events/Abhivyakti" component={Abhivyakti}></Route>
          <Route exact path="/events/TurnCoat" component={TurnCoat}></Route>

          <Route
            exact
            path="/resetPassword/:resetToken"
            component={ResetPassword}
          />

          {!user.isLoggedIn ? (
            <Route exact path="/dashboard">
              <Redirect to="/signup" />{" "}
            </Route>
          ) : user.user.role === "delegate" ? (
            <Route exact path="/dashboard" component={DelegateDashboard} />
          ) : user.user.role === "admin" ? (
            <Route exact path="/dashboard" component={AdminDashboard} />
          ) : (
            <Route exact path="/dashboard" component={CADashboard} />
          )}
          {!user.isLoggedIn ? (
            <Route exact path="/profileCompletion" component={ComingSoon} />
          ) : (
            <Route
              exact
              path="/profileCompletion"
              component={ProfileCompletionForm}
            />
          )}

          {user.isLoggedIn && user.user.role === "admin" ? (
            <Route
              exact
              path="/admin/uploadTasks"
              component={UploadTaskForm}
            ></Route>
          ) : (
            <Route exact path="/admin/uploadTasks" component={ComingSoon} />
          )}
          {user.isLoggedIn && user.user.role === "admin" ? (
            <Route
              exact
              path="/admin/registerCA"
              component={RegisterCAForm}
            ></Route>
          ) : (
            <Route exact path="/admin/registerCA" component={ComingSoon} />
          )}
          {user.isLoggedIn && user.user.role === "admin" ? (
            <Route
              exact
              path="/admin/getAllUsers"
              component={GetAllRegistration}
            ></Route>
          ) : (
            <Route exact path="/admin/getAllUsers" component={ComingSoon} />
          )}
          {user.isLoggedIn && user.user.role === "admin" ? (
            <Route exact path="/admin/showTasks" component={CAList}></Route>
          ) : (
            <Route exact path="/admin/showTasks" component={ComingSoon} />
          )}
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
    // <BrowserRouter>
    // <Routing/>
    // </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
