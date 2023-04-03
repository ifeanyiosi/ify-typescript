import Notification from "@/components/Notification";
import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="h-full bg-primary-300">
      Signup
      <Notification
        title="Yes"
        body="This works"
        type="success"
        duration={5000}
      />
    </div>
  );
};

export default Signup;
