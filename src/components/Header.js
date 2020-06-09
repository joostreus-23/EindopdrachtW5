import React from "react";

function Header() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
  };

  if (hours < 12) {
    timeOfDay = "morgen";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "middag";
  } else {
    timeOfDay = "avond";
  }

  return (
    <header className="header">
      <h1>Goeden{timeOfDay}!</h1>
      <h1>Welkom bij de Amazing playlistmaker</h1>
    </header>
  );
}

export default Header;
