import { Link } from "react-router-dom";
import "./Portfolio.css";

const portfolioItems = [
  {
    id: 1,
    title: "Patterned Shapes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F1.png?alt=media&token=ebae488c-ca91-4a06-aac0-d9352f8d0598",
  },
  {
    id: 2,
    title: "Still Life Shapes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F2.png?alt=media&token=912840ae-9e7e-48c6-8a8c-814769418c0e",
  },
  {
    id: 3,
    title: "Dragged",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F3.png?alt=media&token=9c08c137-c8c6-4d99-8b8f-09c934fab5f3",
  },
  {
    id: 4,
    title: "Tradition",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F4.png?alt=media&token=4447d481-01dc-44ad-9178-cbe90b18f3f6",
  },
  {
    id: 5,
    title: "Hanging Geometric Shapes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F5.png?alt=media&token=5d629ce9-3294-4f58-b510-c6a9a973e8c1",
  },
  {
    id: 6,
    title: "Childhood Toy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F6.png?alt=media&token=318141e7-7f30-4943-aaba-7d469c07a8c3",
  },
  {
    id: 7,
    title: "Who Am I?",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F7.png?alt=media&token=600953f8-e302-4324-b7fe-3c22fbe4ac75",
  },
  {
    id: 8,
    title: "Minhwa Flowers",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F8.png?alt=media&token=574cce0d-1583-483a-a212-a63866852986",
  },
  {
    id: 9,
    title: "Safari Animals Rendering",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F9.png?alt=media&token=32f80d11-574a-4f7a-b497-4cacdf88b137",
  },
  {
    id: 10,
    title: "Mosaic Pattern",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F10.png?alt=media&token=af01b96b-0bf6-4c39-a3a1-bcd8a1f98a2f",
  },
  {
    id: 11,
    title: "Unknown Influences",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F20.png?alt=media&token=50480f17-5190-4078-acb5-bc486719850b ",
  },
  {
    id: 12,
    title: "Living Tradition",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F12.png?alt=media&token=c0096c7a-800a-4d5c-b105-e330dba221b2",
  },
  {
    id: 13,
    title: "Colored Squares",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F13.png?alt=media&token=148ef621-f037-474d-887e-64e6c9b69a83",
  },
  {
    id: 14,
    title: "Living Carp",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F14.png?alt=media&token=589f312e-3fa6-421c-b211-c0c6382ad1b5",
  },
  {
    id: 15,
    title: "Geometric Shapes 2.0",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F15.png?alt=media&token=7252a480-f2d4-4407-b89e-3010942cfa1b",
  },
  {
    id: 16,
    title: "Scrap",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F16.png?alt=media&token=dee983ad-4538-4482-aeab-f27b7e0cdc9a",
  },
  {
    id: 17,
    title: "Changing Seasons Rendering",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F17.png?alt=media&token=3aa9b521-b711-4e0f-987c-e20b708c7f63",
  },
  {
    id: 18,
    title: "Pencil Still Life",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F18.png?alt=media&token=0317c28f-e58c-4ae4-9157-bae24bd144b2",
  },
  {
    id: 19,
    title: "Colored Pencil Renderings",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F19.png?alt=media&token=2a407e0f-c372-4600-b8e5-8ce6f722b278",
  },
  {
    id: 20,
    title: "The Heart Going Through Struggle",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F11.png?alt=media&token=22c7f76b-43e8-4657-87ae-94b611d6352a",
  },
  {
    id: 21,
    title: "The Speaking Rooster",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F21.png?alt=media&token=d63c98e9-a289-465d-8151-8612ca650315",
  },
  {
    id: 22,
    title: "Can I Bloom?",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F22.png?alt=media&token=f14a75eb-c3e1-4e07-8972-5dd2096528fa",
  },
];

const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            to={`/portfolio/${item.id}`}
            className={item.fullRow ? "full-row portfolio-item" : "portfolio-item"}
          >
            <img src={item.image} alt={item.title} />
            <div className="portfolio-item-overlay">
              <h3 className="portfolio-item-title">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
