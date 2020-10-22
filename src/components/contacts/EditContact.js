import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getcontact, updateContact } from "../../actions/contactAction";

const EditContact = () => {
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contacts.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getcontact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    dispatch(updateContact(update_contact));
    history.push("/");
  };
  return (
    <div className="card-border-0 shadow">
      <div className="card-header bg-danger text-white">Update Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Phone "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn  btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
