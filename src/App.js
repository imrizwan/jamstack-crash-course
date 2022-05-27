import { useEffect, useState } from "react"
import LinkList from "./components/LinkList"
import LinkForm from "./components/LinkForm"
import './App.css';

function App() {

  const [links, setLinks] = useState([])

  const loadLinks = async () => {
    const res = await fetch("/.netlify/functions/getLinks");
    const links = await res.json();
    setLinks(links);
  }

  useEffect(() => {
    loadLinks();
  }, [])

  return (
    <div className="container py-5">
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} loadLinks={loadLinks} />
    </div>
  );
}

export default App;
