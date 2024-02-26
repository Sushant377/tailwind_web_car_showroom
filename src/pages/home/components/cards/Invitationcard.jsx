/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "./Invitation.css";
function Invitationcard(props) {
  const { name, children } = props;
  return (
    <div>
      <div className="invit">
        <img src="./ganesh.jpg" alt="" height={"70px"} width={"90px"} />
        {name && <div className="name">{name}</div>}
        <div className="img1">
          <img
            src="./velu.jpg"
            alt=""
            height={"110px"}
            width={"120px"}
            style={{ borderRadius: "80px" }}
          />
          <img
            src="./kalash.png"
            alt=""
            height={"110px"}
            width={"120px"}
            style={{ borderRadius: "80px" }}
          />

          <img
            src="./vauju.jpg"
            alt=""
            height={"110px"}
            width={"120px"}
            style={{ borderRadius: "80px" }}
          />
        </div>
        <div className="cont">
          {children && <div className="child">{children}</div>}
        </div>
      </div>
    </div>
  );
}

export default Invitationcard;