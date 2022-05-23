import { Dots, Feeling, Photo } from "../../svg";
export default function AddToYourPost({ setShowPrev }) {
  return (
    <div className="addtoyourpost">
      <div className="addto_text">Create image</div>
      {/* <div
        className="post_header_right hover1"
        onClick={() => {
          setShowPrev(true);
        }}
      >
        <Photo color="#45bd62" />
      </div> */}
      <div className="post_header_right">
        {/* <i className="tag_icon"></i> */}
      </div>
      <div className="post_header_right">
        {/* <Feeling color="#f7b928" /> */}
      </div>
      <div className="post_header_right">
        {/* <i className="maps_icon"></i> */}
      </div>
      <div className="post_header_right">
        {/* <i className="microphone_icon"></i> */}
      </div>
      <div className="post_header_right">{/* <Dots color="#65676b" /> */}</div>
      <div
        className="post_header_right hover1"
        onClick={() => {
          setShowPrev(true);
        }}
      >
        <Photo color="#ff5500" />
      </div>
    </div>
  );
}
