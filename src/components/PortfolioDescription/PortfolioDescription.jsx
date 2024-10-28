import { useParams, Link } from "react-router-dom";
import "./PortfolioDescription.css";

const portfolioItems = [
    { id: 1, title: 'Project 1', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F1.png?alt=media&token=ebae488c-ca91-4a06-aac0-d9352f8d0598', description: 'Detailed description for Project 1' },
    { id: 2, title: 'Project 2', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F2.png?alt=media&token=912840ae-9e7e-48c6-8a8c-814769418c0e', description: 'Detailed description for Project 2' },
    { id: 3, title: 'Project 3', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F3.png?alt=media&token=9c08c137-c8c6-4d99-8b8f-09c934fab5f3', description: 'Detailed description for Project 3' },
    { id: 4, title: 'Project 4', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F4.png?alt=media&token=4447d481-01dc-44ad-9178-cbe90b18f3f6', description: 'Detailed description for Project 4' },
    { id: 5, title: 'Project 5', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F5.png?alt=media&token=5d629ce9-3294-4f58-b510-c6a9a973e8c1', description: 'Detailed description for Project 5' },
    { id: 6, title: 'Project 6', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F6.png?alt=media&token=318141e7-7f30-4943-aaba-7d469c07a8c3', description: 'Detailed description for Project 6' },
    { id: 7, title: 'Project 7', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F7.png?alt=media&token=600953f8-e302-4324-b7fe-3c22fbe4ac75', description: 'Detailed description for Project 7' },
    { id: 8, title: 'Project 8', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F8.png?alt=media&token=574cce0d-1583-483a-a212-a63866852986', description: 'Detailed description for Project 8' },
    { id: 9, title: 'Project 9', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F9.png?alt=media&token=32f80d11-574a-4f7a-b497-4cacdf88b137', description: 'Detailed description for Project 9' },
    { id: 10, title: 'Project 10', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F10.png?alt=media&token=af01b96b-0bf6-4c39-a3a1-bcd8a1f98a2f', description: 'Detailed description for Project 10' },
    { id: 11, title: 'Project 11', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F20.png?alt=media&token=50480f17-5190-4078-acb5-bc486719850b ', description: 'Detailed description for Project 11' },
    { id: 12, title: 'Project 12', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F12.png?alt=media&token=c0096c7a-800a-4d5c-b105-e330dba221b2', description: 'Detailed description for Project 12' },
    { id: 13, title: 'Project 13', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F13.png?alt=media&token=148ef621-f037-474d-887e-64e6c9b69a83', description: 'Detailed description for Project 13' },
    { id: 14, title: 'Project 14', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F14.png?alt=media&token=589f312e-3fa6-421c-b211-c0c6382ad1b5', description: 'Detailed description for Project 14' },
    { id: 15, title: 'Project 15', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F15.png?alt=media&token=7252a480-f2d4-4407-b89e-3010942cfa1b', description: 'Detailed description for Project 15' },
    { id: 16, title: 'Project 16', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F16.png?alt=media&token=dee983ad-4538-4482-aeab-f27b7e0cdc9a', description: 'Detailed description for Project 16' },
    { id: 17, title: 'Project 17', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F17.png?alt=media&token=3aa9b521-b711-4e0f-987c-e20b708c7f63', description: 'Detailed description for Project 17' },
    { id: 18, title: 'Project 18', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F18.png?alt=media&token=0317c28f-e58c-4ae4-9157-bae24bd144b2', description: 'Detailed description for Project 18' },
    { id: 19, title: 'Project 19', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F19.png?alt=media&token=2a407e0f-c372-4600-b8e5-8ce6f722b278', description: 'Detailed description for Project 19' },
    { id: 20, title: 'Project 20', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F11.png?alt=media&token=22c7f76b-43e8-4657-87ae-94b611d6352a', description: 'Detailed description for Project 20' },
    { id: 21, title: 'Project 21', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F21.png?alt=media&token=d63c98e9-a289-465d-8151-8612ca650315', description: 'Detailed description for Project 21' },
    { id: 22, title: 'Project 22', image: 'https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F22.png?alt=media&token=f14a75eb-c3e1-4e07-8972-5dd2096528fa', description: 'Detailed description for Project 22' },
  ];

const PortfolioDescription = () => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const item = portfolioItems.find((item) => item.id === itemId);

  const getNextId = () => (itemId < portfolioItems.length ? itemId + 1 : 1);
  const getPrevId = () => (itemId > 1 ? itemId - 1 : portfolioItems.length);

  return (
    <div className="container">
      <div className="portfolio-description">
      <Link to="/portfolio" className="exit-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 6L6 18" stroke="black" strokeWidth="2" />
          <path d="M6 6L18 18" stroke="black" strokeWidth="2" />
        </svg>
      </Link>
      <div className="description-content">
        <img src={item.image} alt={item.title} className="description-image" />
        <div className="description-text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="nav-buttons">
        <Link to={`/portfolio/${getPrevId()}`} className="nav-button">
          Previous
        </Link>
        <Link to={`/portfolio/${getNextId()}`} className="nav-button">
          Next
        </Link>
      </div>
    </div>
    </div>
  );
};

export default PortfolioDescription;
