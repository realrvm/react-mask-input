import { useState, useEffect, useRef, memo } from "react";

function App() {
  const [card, setCard] = useState("");

  return (
    <>
      <InputMask card={card} setCard={setCard} />
    </>
  );
}

export default App;

const InputMask = memo(({ card, setCard }) => {
  const inputCard = useRef();

  const handleChange = () => {
    const cardValue = inputCard.current.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    inputCard.current.value = !cardValue[2]
      ? cardValue[1]
      : `(${cardValue[1]}) ${cardValue[2]}${`${
          cardValue[3] ? `-${cardValue[3]}` : ""
        }`}${`${cardValue[4] ? `-${cardValue[4]}` : ""}`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, "");
    setCard(numbers);
  };

  return (
    <>
      <p>{card}</p>
      <input type="tel" ref={inputCard} onChange={handleChange} />
    </>
  );
});
