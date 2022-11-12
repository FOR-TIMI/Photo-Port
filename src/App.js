import React, {useState} from "react";
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact"

function App() {

  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ])

const [currentCategory, setCurrentCategory] = useState(categories[0])
const [contactSelected, setContactSelected] = useState(false)

  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}  
        setContactSelected={setContactSelected}
        contactSelected={contactSelected}
      />
      <main>
         {!contactSelected ? (
           <>
           <Gallery currentCategory={currentCategory}/>
           <About/>
           </>
         ) : (
          <ContactForm/>
         )}
      </main>
    </div>
  );
}

export default App;


