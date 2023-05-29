import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. Phaniband Ubeidullah</h2>

                <h5 className="address mb-3">
                    H. No.: 11/211, Jamkhanwadi Street,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 80084 20918, <br />
                    +91 93907 39225, <br />
                    +91 97034 23277, <br />
                    +91 73861 07784.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
