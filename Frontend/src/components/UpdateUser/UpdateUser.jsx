// import React, { useState } from "react";
// import useUserHook from "../../hooks/useUserHook"; // Import your user hook
// import "./UpdateUser.css"; // Import the corresponding CSS file

// const UpdateUser = () => {
//   const { updateUser } = useUserHook(); // Import and use your custom hook
//   const [userId, setUserId] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [role, setRole] = useState(2); // Default role value (2 = regular)
//   const [balance, setBalance] = useState(0); // Default balance value

//   const handleUpdate = () => {
//     if (userId) {
//       const updatedUserData = {
//         name,
//         email,
//         phone,
//         address,
//         role,
//         balance,
//       };
//       updateUser(userId, updatedUserData);
//       // Clear the form fields after the update if needed
//       setUserId("");
//       setName("");
//       setEmail("");
//       setPhone("");
//       setAddress("");
//       setRole(2); // Reset role to default (Regular)
//       setBalance(0); // Reset balance to default (0)
//     }
//   };

//   return (
//     <div className="user-update-container">
//       <h1>Update User By ID</h1>
//       <div className="form-group">
//         <p>User ID:</p>
//         <input
//           type="text"
//           placeholder="User ID"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <p>Name:</p>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <p>Email:</p>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <p>Phone:</p>
//         <input
//           type="tel"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <p>Address:</p>
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <p>Role:</p>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value={1}>Admin</option>
//           <option value={2}>Regular</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <p>Balance:</p>
//         <input
//           type="number"
//           placeholder="Balance"
//           value={balance}
//           onChange={(e) => setBalance(e.target.value)}
//         />
//       </div>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// };

// export default UpdateUser;

import React, { useState } from "react";
import useUserHook from "../../hooks/useUserHook";
import { useParams } from "react-router-dom"; // Import useParams
import "./UpdateUser.css";

const UpdateUser = () => {
  const { updateUser } = useUserHook();
  const { id } = useParams(); // Extract the user ID from the URL parameter

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState(2);
  const [balance, setBalance] = useState(0);

  const handleUpdate = () => {
    if (id) {
      const updatedUserData = {
        name,
        email,
        phone,
        address,
        role,
        balance,
      };
      updateUser(id, updatedUserData);
      setUserId("");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setRole(2); // Reset role to default (Regular)
      setBalance(0); // Reset balance to default (0)
    }
  };

  return (
    <div className="user-update-container">
      <h1>Update User By ID</h1>
      <div className="form-group">
        <p>User ID:</p>
        <input
          type="text"
          placeholder="User ID"
          value={id} /* Set the user ID from the URL parameter */
          disabled={true} /* Disable editing the user ID */
        />
      </div>
      <div className="form-group">
        <p>Name:</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <p>Email:</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <p>Phone:</p>
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <p>Address:</p>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <p>Role:</p>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={1}>Admin</option>
          <option value={2}>Regular</option>
        </select>
      </div>
      <div className="form-group">
        <p>Balance:</p>
        <input
          type="number"
          placeholder="Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateUser;
