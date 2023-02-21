import React, {useState} from 'react'


const ClothingItem = ({ myKey, id, value }) => {
  const [items, setItems] = useState([]);

  const [toggle, setToggle] = useState(null);

  return (
    <button
    key={myKey}
    id={id}
    value={value}
    className={toggle ? "dark" : null}
    onClick={() => {
      setToggle(!toggle);
    }}
  >
    {value}
  </button>
  )
}

export default ClothingItem