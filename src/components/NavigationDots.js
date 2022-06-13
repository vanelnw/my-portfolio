import React, { useState } from 'react'

const NavigationDots = () => {
    const [active, setActive] = useState("home")
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "work", "testimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            onClick={() => setActive(`${item}`)}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots