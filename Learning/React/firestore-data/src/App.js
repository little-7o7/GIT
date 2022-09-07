import React, { useState, useEffect } from "react";

import "./App.css";

import { db } from "./firebase";
import { doc, set, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

function App() {
    const [customerName, setCustomerName] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");
    const [customersData, setCustomersData] = useState([]);
    const [customerData, setCustomerData] = useState({});
    const [updatedCustomerName, setUpdatedCustomerName] = useState("");
    const [updatedCustomerPassword, setUpdatedCustomerPassword] = useState("");
    const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

    useEffect(() => {
        (async function () {
            // ! get items
            const querySnapshot = await getDocs(collection(db, "catalogs"));
            setCustomersData(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );

            // ! get item
            const docRef = doc(db, "catalogs", "asal", 'asal', '500');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setCustomerData(
                    {
                        id: docSnap.id,
                        ...docSnap.data(),
                    }
                )
            } else {
                console.log("No such document!");
            }
        }());
    }, [])

    useEffect(() => {
        console.log("Document data:", customerData);
    }, [customerData])

    const PostData = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: customerName,
                password: customerPassword
            }
            const docRef = await addDoc(collection(db, "customersData", 'admins', 'sadfakjsdf').doc('new-city-id').set(data));
            console.log("Document written with ID: ", docRef.id);

            setCustomerName("");
            setCustomerPassword("");
            console.log('post');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const updateData = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, "customersData", dataIdToBeUpdated), {
                name: updatedCustomerName,
                password: updatedCustomerPassword,
            });

            setUpdatedCustomerPassword("");
            setUpdatedCustomerName("");
            setDataIdToBeUpdated("");
        } catch (err) {
            console.log(err);
        }
    };

    const deleteData = async (id) => {
        await deleteDoc(doc(db, "customersData", id));
    };

    return (
        <div className="App">
            {!dataIdToBeUpdated ? (
                <div className="App__form">
                    <input
                        type="text"
                        placeholder="Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        value={customerPassword}
                        onChange={(e) => setCustomerPassword(e.target.value)}
                    />
                    <button onClick={PostData}>Submit</button>
                </div>
            ) : (
                <div className="App__Updateform">
                    <input
                        type="text"
                        placeholder="Name"
                        value={updatedCustomerName}
                        onChange={(e) => setUpdatedCustomerName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        value={updatedCustomerPassword}
                        onChange={(e) => setUpdatedCustomerPassword(e.target.value)}
                    />
                    <button onClick={updateData}>Update</button>
                </div>
            )}

            <div className="App__DataDisplay">
                <table>
                    <tbody>
                        <tr>
                            <th>NAME</th>
                            <th>PASSWORD</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>

                        {customersData?.map(({ id, name, password }) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{password}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setDataIdToBeUpdated(id);
                                            setUpdatedCustomerPassword(password);
                                            setUpdatedCustomerName(name);
                                        }}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            deleteData(id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="data_disp">
                {/* <span>{customerData.id}</span> */}
                <span>{customerData.name}</span>
                <span>{customerData.password}</span>
            </div>
        </div>
    );
}

export default App;