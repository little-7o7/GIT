import React, { useState, useEffect } from "react";

import "./App.css";

import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {
    const [customerName, setCustomerName] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");
    const [customersData, setCustomersData] = useState([]);

    const GetDatas = async () => {
        const querySnapshot = await getDocs(collection(db, "customersData"));
        setCustomersData(
            querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
        );
    }

    GetDatas()

    const PostData = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "customersData"), {
                name: customerName,
                password: customerPassword,
            });
            console.log("Document written with ID: ", docRef.id);

            setCustomerName("");
            setCustomerPassword("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className="App">
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
            <div className="App__DataDisplay">
                <table>
                    <tbody>
                        <tr>
                            <th>NAME</th>
                            <th>PASSWORD</th>
                        </tr>
                        {customersData?.map(({ id, name, password }) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;