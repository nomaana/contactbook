import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";
const Contact = (props) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = props.contact;
  return (
    <tr>
      <td>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            checked={props.selectAll}
          />
          <label class="custom-control-label" />
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} round={true} size={40} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit:${id}`}>
          <span className="material-icons mr-2 text-danger">edit</span>
        </Link>
        <span
          className="material-icons"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
