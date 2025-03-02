import React, { useState } from "react";
import "./App.css";
import "./animation.css";

type DropdownProps = { title: string; items: string[] };

function Dropdown({ title, items }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="dropdown-title">
        {title} <span className="caret">▼</span>
      </div>
      {open && (
        <div className="dropdown-menu">
          {items.map((item, idx) => (
            <div key={idx} className="dropdown-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const dropdownItems = ["Item 1", "Item 2", "Item 3"];
  const rows = [
    {
      title: "Row 1 Title",
      text: "Row 1 line 1<br/>Row 1 line 2",
      img: "https://codeinthedark.hackillinois.org/submissions/images/home/image1.png",
    },
    {
      title: "Row 2 Title",
      text: "Row 2 line 1<br/>Row 2 line 2",
      img: "https://codeinthedark.hackillinois.org/submissions/images/home/image2.png",
    },
    {
      title: "Row 3 Title",
      text: "Row 3 line 1<br/>Row 3 line 2",
      img: "https://codeinthedark.hackillinois.org/submissions/images/home/image3.png",
    },
    {
      title: "Row 4 Title",
      text: "Row 4 line 1<br/>Row 4 line 2",
      img: "https://codeinthedark.hackillinois.org/submissions/images/home/image1.png",
    },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Top header with social icons */}
      <div className="top-header">
        <div className="social-icons">
          {/* SVG icons start gray, turn blue on hover */}
          <svg className="social-icon" width="24" height="24">
            <rect width="24" height="24" fill="gray" />
          </svg>
          <svg className="social-icon" width="24" height="24">
            <rect width="24" height="24" fill="gray" />
          </svg>
          <svg className="social-icon" width="24" height="24">
            <rect width="24" height="24" fill="gray" />
          </svg>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="navbar">
        <div className="nav-left">
          <img
            src="https://codeinthedark.hackillinois.org/submissions/images/CAT-Logo-small.png"
            alt="Logo"
            className="nav-logo"
          />
        </div>
        <div className="nav-right">
          <Dropdown title="Home" items={dropdownItems} />
          <Dropdown title="Pages" items={dropdownItems} />
          <Dropdown title="Blog" items={dropdownItems} />
          {/* Search icon (non-functional) */}
          <svg className="search-icon" width="24" height="24">
            <circle
              cx="10"
              cy="10"
              r="8"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="15"
              y1="15"
              x2="20"
              y2="20"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </nav>

      {/* Large section with two columns */}
      <section className="large-section">
        <div className="large-section-left">
          <h1>Coding here!</h1>
          <p>
            This is a sample paragraph for the large section. It describes
            something interesting.
          </p>
          <button className="dark-button">Go D@RK!</button>
        </div>
        <div className="large-section-right anim-container">
          <img
            src="https://codeinthedark.hackillinois.org/submissions/images/hill.png"
            className="hill"
          />
          <img
            src="https://codeinthedark.hackillinois.org/submissions/images/home/slider/sun.png"
            className="sun"
          />
          <img
            src="https://codeinthedark.hackillinois.org/submissions/images/home/slider/birds1.png"
            className="bird1"
          />
          <img
            src="https://codeinthedark.hackillinois.org/submissions/images/home/slider/birds2.png"
            className="bird2"
          />
        </div>
      </section>

      {/* Three columns section */}
      <section className="three-columns">
        {["Cat loves geeks ", "Cat loves cs", "Title 3"].map((title, i) => (
          <div key={i} className="column">
            <img
              src="https://codeinthedark.hackillinois.org/submissions/images/home/profile2.png"
              alt={`Small ${i + 1}`}
            />
            <h3>{title}</h3>
            <p>
              Line 1<br />
              Line 2
            </p>
          </div>
        ))}
      </section>

      {/* 80px high section with images and a "hit me!" button */}
      <section
        className="eighty-section"
        style={{
          backgroundImage: 'url(https://codeinthedark.hackillinois.org/submissions/images/home/tour-bg.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        <img src="https://codeinthedark.hackillinois.org/submissions/images/CAT-Logo-small.png" alt="Left" className="side-image" style={{ width: '40px', height: '40px' }} />
        <button className="hit-button" onClick={handleScrollTop} style={{ fontSize: '12px', padding: '5px 10px' }}>
          hit me!
        </button>
        <img src="https://codeinthedark.hackillinois.org/submissions/images/home/tour-icon2.png" alt="Right" className="side-image" style={{ width: '40px', height: '40px' }} />
      </section>

      {/* Four rows alternating section */}
      <section className="four-rows" style={{ padding: '0 80px' }}>
        {rows.map((row, index) => (
          <div
        key={index}
        className={`row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
        <div className="row-image">
          <img src={row.img} alt={`Row ${index + 1}`} />
        </div>
        <div className="row-text">
          <h2>{row.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: row.text }}></p>
        </div>
          </div>
        ))}
      </section>

      {/* Centered square image */}
      <section className="centered-square">
        <img
          src="https://codeinthedark.hackillinois.org/submissions/images/CAT100Logo.png"
          alt="Centered Square"
        />
      </section>

      {/* Title, full width sentence and 6 column gallery */}
      <section className="six-columns">
        <h2 className="centered-title">Gallery</h2>
        <p className="full-width-text">
          This is a full width sentence describing the gallery below.
        </p>
        <div className="image-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src="https://codeinthedark.hackillinois.org/submissions/images/home/client1.png"
              alt={`Gallery ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Full width image */}
      <section className="full-width-image">
        <img
          src="https://codeinthedark.hackillinois.org/submissions/images/home/under.png"
          alt="Full Width"
        />
      </section>

      {/* Footer with three columns */}
      <footer
        className="footer"
        style={{
          backgroundImage:
            "url(https://codeinthedark.hackillinois.org/submissions/images/home/footer.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "660px",
        }}
      >
        <div className="footer-column">
          <h3>Footer Title</h3>
          <p>"A quote goes here."</p>
          <p className="red-name">-Name</p>
        </div>
        <div className="footer-column">
          <p>
            <strong>Contact:</strong>
          </p>
          <p>Name: John Doe</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: john@example.com</p>
          <p>Address: 123 Street, City</p>
        </div>
        <div className="footer-column">
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Question" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
