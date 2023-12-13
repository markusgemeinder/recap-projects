import "./App.css";
import { useState } from "react";
//import { useEffect } from "react";
// import useLocalStorageState from "use-local-storage-state";
import Form from "./component/Form/Form.js";
import List from "./component/List/List.js";

export default function App() {
  const [newEntryTrigger, setNewEntryTrigger] = useState(false);

  const handleNewEntry = () => {
    setNewEntryTrigger(!newEntryTrigger);
  };

  return (
    <>
      <Form setListData={setNewEntryTrigger} />
      <List setListData={setNewEntryTrigger} />
    </>
  );
}
