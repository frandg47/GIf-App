import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import { useState } from "react";



function App() {

  const [categories, setCategories] = useState(["colors"]);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Explorador de GIF</h1>
        <AddCategory setCategories={setCategories} categories={categories} />
        <ol>
          {categories.map((category) => (
            <GifGrid category={category} key={category} />

          ))}
        </ol>
      </div>
    </>
  )
}

export default App
