import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../actions/contactAction";

import Contact from "./Contact";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const selectedContacts = useSelector(
    (state) => state.contacts.selectedContacts
  );
  // console.log(selectedContacts.length, "eeee");
  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedContacts ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          Delete All
        </button>
      ) : null}

      <table class="table shadow table-bordered table-hover">
        <thead className="bg-danger text-white">
          <tr>
            <th scope="col">
              <div class="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  class="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label class="custom-control-label" for="selectAll" />
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">E-mail</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Contacts;
