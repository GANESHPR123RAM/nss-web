import React, { useState } from "react";
import AddNewEvent from "./AddNewEvent";
import RegisteredEvents from "./RegisteredEvents";
import MobileRegisteredEvents from "../MobileEvents/RegisteredEvents";
import MobileAddNewEvent from "../MobileEvents/AddNewEvent";
import Tabs from "./Tabs";
import "./css/index.css";
import { useWidthAndHeight } from "../../../../../../hooks/useWidthAndHeight";

const EventsMainComponent = () => {
  let windowSize = useWidthAndHeight();
  let width = windowSize[0];

  const [buttonStyles, setButtonStyles] = useState({});
  const [eventTextStyles, setEventTextStyles] = useState({});

  const tabs = [{ name: "Registered Events" }, { name: "Add New Event" }];

  const [selectedTab, setSelectedTab] = useState(0);

  const changeSelectedIndex = (index) => setSelectedTab(index);

  React.useEffect(() => {
    const mobileButtonStyles = {
      fontSize: "0.9rem",
      padding: "0.5rem",
      margin: "0rem",
    };

    const mobileEventTextStyles = {
      fontSize: "0.8rem",
      padding: "0.5rem",
    };
    if (width < 1150) setButtonStyles(mobileButtonStyles);
    if (width < 1150) setEventTextStyles(mobileEventTextStyles);
  }, [width]);

  const tabMainViewClass =
    width > 1150 ? "tab-main-view" : "mobile-tab-main-view";

  return (
    <div className="events-main-component">
      <div
        className="col-md-6 col-12 tabs"
        style={{
          cursor: "pointer",
        }}
      >
        <Tabs
          tabs={tabs}
          selectedIndex={selectedTab}
          changeSelectedIndex={changeSelectedIndex}
        ></Tabs>
      </div>
      <div className={tabMainViewClass}>
        {selectedTab === 0 ? (
          width > 1150 ? (
            <RegisteredEvents></RegisteredEvents>
          ) : (
            <MobileRegisteredEvents />
          )
        ) : width > 1150 ? (
          <AddNewEvent />
        ) : (
          <MobileAddNewEvent />
        )}
      </div>
      {selectedTab === 0 ? (
        <div
          className="form-button d-flex justify-content-end"
          style={{
            height: "13%",
          }}
        >
          <div className="col-md-6 col-12 d-flex justify-content-end">
            <div
              className="col-6 event-submission-form-text d-flex align-content-center justify-content-end"
              style={eventTextStyles}
            >
              Event Submission Form
            </div>
            <div className="col-6">
              <div className="event-submission-form-button">
                <a
                  style={buttonStyles}
                  href="https://forms.gle/R4DsoktJQoFwdCiV6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go To Forms
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EventsMainComponent;
