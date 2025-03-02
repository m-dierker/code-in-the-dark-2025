// import React, { useState } from "react";
// import "./index.css";

// type DropdownProps = { title: string; items: string[] };

// function Dropdown({ title, items }: DropdownProps) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
//       <div className="flex items-center">
//         <span>{title}</span>
//         <span className="ml-1 text-sm">▼</span>
//       </div>
//       {open && (
//         <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg z-10">
//           {items.map((item, idx) => (
//             <div key={idx} className="px-4 py-2 hover:bg-gray-100">
//               {item}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function App() {
//   const dropdownItems = ["Item 1", "Item 2", "Item 3"];
//   const rows = [
//     {
//       title: "Row 1 Title",
//       text: "Row 1 line 1<br/>Row 1 line 2",
//       img: "placeholder.jpg",
//     },
//     {
//       title: "Row 2 Title",
//       text: "Row 2 line 1<br/>Row 2 line 2",
//       img: "placeholder.jpg",
//     },
//     {
//       title: "Row 3 Title",
//       text: "Row 3 line 1<br/>Row 3 line 2",
//       img: "placeholder.jpg",
//     },
//     {
//       title: "Row 4 Title",
//       text: "Row 4 line 1<br/>Row 4 line 2",
//       img: "placeholder.jpg",
//     },
//   ];

//   const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <div className="App">
//       {/* Top Header */}
//       <div className="bg-blue-200 p-10 relative">
//         <div className="absolute bottom-2 right-2 flex gap-3">
//           <svg
//             className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <rect width="24" height="24" />
//           </svg>
//           <svg
//             className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <rect width="24" height="24" />
//           </svg>
//           <svg
//             className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <rect width="24" height="24" />
//           </svg>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <nav className="bg-white flex items-center justify-between px-8 py-4 border-b border-gray-300">
//         <div>
//           <img src="placeholder.jpg" alt="Logo" className="h-10" />
//         </div>
//         <div className="flex items-center gap-6">
//           <Dropdown title="Menu 1" items={dropdownItems} />
//           <Dropdown title="Menu 2" items={dropdownItems} />
//           <Dropdown title="Menu 3" items={dropdownItems} />
//           <svg
//             className="w-6 h-6 cursor-pointer"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <circle cx="10" cy="10" r="8" />
//             <line x1="15" y1="15" x2="20" y2="20" />
//           </svg>
//         </div>
//       </nav>

//       {/* Large Section */}
//       <section className="flex flex-col md:flex-row items-center justify-center px-8 py-10">
//         <div className="md:w-1/2 md:pr-8 text-center md:text-left">
//           <h1 className="text-3xl font-bold mb-4">Coding here!</h1>
//           <p className="mb-4">
//             This is a sample paragraph for the large section. It describes something interesting.
//           </p>
//           <button className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
//             Go D@RK!
//           </button>
//         </div>
//         <div className="md:w-1/2 mt-6 md:mt-0">
//           <img src="placeholder.jpg" alt="Large Visual" className="mx-auto" />
//         </div>
//       </section>

//       {/* Three Columns Section */}
//       <section className="bg-blue-500 text-white py-10 px-8">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6">
//           {["Title 1", "Title 2", "Title 3"].map((title, i) => (
//             <div key={i} className="text-center">
//               <img src="placeholder.jpg" alt={`Small ${i + 1}`} className="mx-auto mb-2" />
//               <h3 className="font-semibold mb-1">{title}</h3>
//               <p>
//                 Line 1
//                 <br />
//                 Line 2
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 80px Height Section */}
//       <section
//         className="relative h-20 flex items-center justify-between px-8"
//         style={{
//           backgroundImage: 'url(placeholder.jpg)',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <img src="placeholder.jpg" alt="Left" className="h-12" />
//         <img src="placeholder.jpg" alt="Right" className="h-12" />
//         <button
//           onClick={handleScrollTop}
//           className="absolute right-8 bottom-2 px-3 py-1 bg-blue-500 text-white rounded"
//         >
//           hit me!
//         </button>
//       </section>

//       {/* Four Rows Alternating Section */}
//       <section className="py-10 px-8">
//         <div className="max-w-6xl mx-auto space-y-8">
//           {rows.map((row, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row ${
//                 index % 2 !== 0 ? "md:flex-row-reverse" : ""
//               } items-center`}
//             >
//               <div className="md:w-1/3 p-4">
//                 <img src={row.img} alt={`Row ${index + 1}`} className="w-full h-auto" />
//               </div>
//               <div className="md:w-2/3 p-4 text-center md:text-left">
//                 <h2 className="text-2xl font-semibold mb-2">{row.title}</h2>
//                 <p dangerouslySetInnerHTML={{ __html: row.text }}></p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Centered Square Image */}
//       <section className="py-10 text-center">
//         <img
//           src="placeholder.jpg"
//           alt="Centered Square"
//           className="mx-auto w-48 h-48 object-cover"
//         />
//       </section>

//       {/* Gallery Section */}
//       <section className="py-10 px-8 text-center">
//         <h2 className="text-3xl font-bold mb-4">Gallery</h2>
//         <p className="mb-6">
//           This is a full width sentence describing the gallery below.
//         </p>
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <img key={i} src="placeholder.jpg" alt={`Gallery ${i + 1}`} className="mx-auto" />
//           ))}
//         </div>
//       </section>

//       {/* Full Width Image */}
//       <section className="w-full">
//         <img src="placeholder.jpg" alt="Full Width" className="w-full" />
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-100 py-10 px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-2">Footer Title</h3>
//             <p className="italic mb-2">"A quote goes here."</p>
//             <p className="text-red-500">-Name</p>
//           </div>
//           <div className="text-center">
//             <p className="font-semibold mb-2">Contact:</p>
//             <p>Name: John Doe</p>
//             <p>Phone: 123-456-7890</p>
//             <p>Email: john@example.com</p>
//             <p>Address: 123 Street, City</p>
//           </div>
//           <div className="text-center">
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full border border-gray-300 p-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Question"
//                 className="w-full border border-gray-300 p-2"
//               />
//               <textarea
//                 placeholder="Message"
//                 className="w-full border border-gray-300 p-2"
//               ></textarea>
//               <button type="submit" className="w-full bg-blue-500 text-white py-2">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";

type DropdownProps = { title: string; items: string[] };

function Dropdown({ title, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown" onClick={() => setOpen(!open)}>
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
      img: "placeholder.jpg",
    },
    {
      title: "Row 2 Title",
      text: "Row 2 line 1<br/>Row 2 line 2",
      img: "placeholder.jpg",
    },
    {
      title: "Row 3 Title",
      text: "Row 3 line 1<br/>Row 3 line 2",
      img: "placeholder.jpg",
    },
    {
      title: "Row 4 Title",
      text: "Row 4 line 1<br/>Row 4 line 2",
      img: "placeholder.jpg",
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
          <img src="placeholder.jpg" alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-right">
          <Dropdown title="Menu 1" items={dropdownItems} />
          <Dropdown title="Menu 2" items={dropdownItems} />
          <Dropdown title="Menu 3" items={dropdownItems} />
          {/* Search icon (non-functional) */}
          <svg className="search-icon" width="24" height="24">
            <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" fill="none" />
            <line x1="15" y1="15" x2="20" y2="20" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </nav>

      {/* Large section with two columns */}
      <section className="large-section">
        <div className="large-section-left">
          <h1>Coding here!</h1>
          <p>
            This is a sample paragraph for the large section. It describes something interesting.
          </p>
          <button className="dark-button">Go D@RK!</button>
        </div>
        <div className="large-section-right">
          <img src="placeholder.jpg" alt="Large Visual" />
        </div>
      </section>

      {/* Three columns section */}
      <section className="three-columns">
        {["Title 1", "Title 2", "Title 3"].map((title, i) => (
          <div key={i} className="column">
            <img src="placeholder.jpg" alt={`Small ${i + 1}`} />
            <h3>{title}</h3>
            <p>
              Line 1<br />Line 2
            </p>
          </div>
        ))}
      </section>

      {/* 80px high section with images and a "hit me!" button */}
      <section className="eighty-section">
        <img src="placeholder.jpg" alt="Left" className="side-image" />
        <img src="placeholder.jpg" alt="Right" className="side-image" />
        <button className="hit-button" onClick={handleScrollTop}>
          hit me!
        </button>
      </section>

      {/* Four rows alternating section */}
      <section className="four-rows">
        {rows.map((row, index) => (
          <div key={index} className={`row ${index % 2 !== 0 ? "reverse" : ""}`}>
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
        <img src="placeholder.jpg" alt="Centered Square" />
      </section>

      {/* Title, full width sentence and 6 column gallery */}
      <section className="six-columns">
        <h2 className="centered-title">Gallery</h2>
        <p className="full-width-text">
          This is a full width sentence describing the gallery below.
        </p>
        <div className="image-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <img key={i} src="placeholder.jpg" alt={`Gallery ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Full width image */}
      <section className="full-width-image">
        <img src="placeholder.jpg" alt="Full Width" />
      </section>

      {/* Footer with three columns */}
      <footer className="footer">
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
