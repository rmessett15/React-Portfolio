import React from "react";
import resume1 from "../../images/resume1.png"
import resume2 from "../../images/resume2.png";

export default function Resume() {
  return (
    // <div>
    //   <h1>Resume</h1>
    //   <p>
    //     Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
    //     Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
    //     dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
    //     sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
    //     sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
    //     vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
    //     libero. Class aptent taciti sociosqu ad litora torquent per conubia
    //     nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
    //     lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    //     Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
    //     in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
    //     bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
    //     est ligula suscipit velit, sed bibendum turpis dui in sapien.
    //   </p>
    // </div>

    <div>
      <h1>My Resume</h1>
      <img
        src={resume1}
        alt="Resume"
        style={{ width: "50%", height: "auto" }}
      />
      <br></br>
      <img
        src={resume2}
        alt="Resume"
        style={{ width: "50%", height: "auto" }}
      />
      {/* <a href={resumePdf} download="resume.pdf">Download PDF</a> */}
    </div>
  );
}
