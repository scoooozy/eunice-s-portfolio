import { useParams, Link } from "react-router-dom";
import "./PortfolioDescription.css";

const portfolioItems = [
  {
    id: 1,
    title: "Patterned Shapes",
    materials: "Colored Origami Paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F1.png?alt=media&token=ebae488c-ca91-4a06-aac0-d9352f8d0598",
    description:
      " For this project, I wanted to highlight the variety of colors and different patterns these colors can make. There is an arrangement of vividly colored origami squares and octagons. Each shape is folded precisely, with the connection of multiple parts. The squares are arranged in a visually appealing pattern, like a mosaic, with a mixture of both bright and pastel tones—pinks, blues, yellows, and greens. Each square appears three-dimensional due to carefully folded edges and shadow effects, creating a slight sense of depth. The colors blend harmoniously, with some squares rotated to form an abstract design, emphasizing symmetry and geometric repetition. The arrangement overall looks balanced yet playful, designed to showcase the art of precision folding and vibrant color coordination.",
  },
  {
    id: 2,
    title: "Still Life Shapes",
    materials: "Charcoal on Paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F2.png?alt=media&token=912840ae-9e7e-48c6-8a8c-814769418c0e",
    description:
      "In this charcoal drawing, I arranged a collection of classic 3D shapes—cubes, spheres, cylinders, and cones—trying to create a balanced composition. I used a range of shading techniques to give each shape a sense of depth, layering rich, velvety blacks on the shadowed sides and soft grays on the light-facing surfaces. As I blended the charcoal, I aimed for a smooth transition in the gradients to make each form feel almost tangible, as if it might pop off the page. I darkened the background slightly, hoping to create a dramatic contrast that would emphasize the shapes and give the whole scene a moody, almost cinematic atmosphere.",
  },
  {
    id: 3,
    title: "Dragged",
    materials:
      "Watercolor, Acrylic Paint, Colored Pencil on Illustration Board",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F3.png?alt=media&token=9c08c137-c8c6-4d99-8b8f-09c934fab5f3",
    description:
      "William, what do you want for lunch? Chicken Nuggets! This is my neurodivergent cousin who only eats chicken nuggets for his meals. This includes breakfast, lunch, and dinner. For this project, I wanted to portray how these chicken nuggets he was eating were piling up on him and slowly dragging him down. He is trying to hold on by reaching out, scratching the surface. He doesn't have a significant facial expression because he himself cannot recognize mentally what is happening. I used a watercolor wash to give the contrast between red and yellow. I then colored my sketch with acrylic paint starting with the lightest color. After completing the painting, I used colored pencils to refine the details. ",
  },
  {
    id: 4,
    title: "Tradition",
    materials: "Korean Folk paint on Rice paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F4.png?alt=media&token=4447d481-01dc-44ad-9178-cbe90b18f3f6",
    description:
      "For this project, I wanted to portray Korean traditional writing instruments in the Minhwa style. The scene is lively and vibrant, capturing the essence of Korean folk art with the importance of color and simplicity. The painting includes a chest with a low table, rolls of paper, and brushes. I painted in a blend of bold and earthy colors. This portrayal captures both the beauty and cultural symbolism embedded in these traditional Korean furnishings, showcasing the Minhwa style’s charm and narrative quality.",
  },
  {
    id: 5,
    title: "Hanging Geometric Shapes",
    materials: "Colored Origami Paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F5.png?alt=media&token=5d629ce9-3294-4f58-b510-c6a9a973e8c1",
    description:
      "I created a display of hanging geometric origami shapes, each one suspended by nearly invisible threads so they seem to float in mid-air. I chose a variety of shapes—tetrahedrons, cubes, and dodecahedrons—and crafted each from brightly colored paper, arranging them at different heights to create a cascading effect. As soft light hits them, shadows form, and the crisp folds catch a subtle sheen, giving each piece a three-dimensional quality. They sway gently, which adds a calming, almost hypnotic feel to the display. I wanted this arrangement to feel balanced and symmetrical, like a modern, floating landscape that brings a sense of peace and wonder.",
  },
  {
    id: 6,
    title: "Childhood Toy",
    materials: "Charcoal, fixative on paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F6.png?alt=media&token=318141e7-7f30-4943-aaba-7d469c07a8c3",
    description:
      " I designed a childhood toy—a car, where you pull the string and the top ball rotates using charcoal, aiming to capture both its texture and nostalgic charm. The car’s edges are like a soccer ball, another used toy for children and I’ve focused on the rounded corners and worn wheels, blending the charcoal to give it a sense of age and warmth. Shadows and highlights create a slightly three-dimensional effect, making it feel as though it could roll right off the page. I added subtle smudges to hint at tiny dents and scratches as if it has a history of play. The background is softly shaded to keep the focus on the toy, giving it a timeless, almost dreamlike quality that recalls those simpler childhood days.",
  },
  {
    id: 7,
    title: "Who Am I?",
    materials:
      "Acrylic paint, Paper, String, Pins, Acrylic markers, Sharpie on canvas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F7.png?alt=media&token=600953f8-e302-4324-b7fe-3c22fbe4ac75",
    description:
      "Am I Korean? Am I American? I look at a reflection of myself and I see both. In this painting, I incorporated the Korean traditional side of myself including traditional hairpins and morans (traditional flowers). The different shapes and red string represent how confused I am about my identity but all the red strings lead to one bundle. They all come together to make up who I am. All the different experiences, cultures, and traditions are a part of me. ",
  },
  {
    id: 8,
    title: "Minhwa Flowers",
    materials: "Korean Folk Paint on Rice paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F8.png?alt=media&token=574cce0d-1583-483a-a212-a63866852986",
    description:
      "For these projects, I painted moran, or peonies birds, and nature, in the Minhwa style on rice paper. I wanted to capture the lively, symbolic energy. I chose bold, vibrant colors—deep reds, rich pinks, and hints of gold—for the petals, letting each brushstroke create layers and texture on the delicate rice paper. The peonies are full and blooming, with leaves and stems extending outward in dynamic, almost playful curves. I emphasized their round, lush shapes, using exaggerated lines to convey their prosperity and beauty. The rice paper absorbs the pigments differently, giving each petal a soft, slightly uneven look that adds character and depth. I hoped to honor the traditional Minhwa style, allowing the flowers to feel both whimsical and powerful, as though they’re blossoming right off the page.",
  },
  {
    id: 9,
    title: "Safari Animals Rendering",
    materials: "Pen on paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F9.png?alt=media&token=32f80d11-574a-4f7a-b497-4cacdf88b137",
    description:
      "Using a pen, I sketched a scene filled with safari animals, each brought to life through fine, detailed lines. I focused on capturing the unique textures and features of each animal—the bold stripes of a zebra, the powerful, lean muscles of a gazelle, and the long neck of the giraffe. For the giraffe, I highlighted its long neck and patterned coat, while delicate stippling brought depth to the softer fur of gazelles in the background. Every line is intentional, creating a sense of movement as if the animals are mid-stride across a sunlit savanna. Shadows fall naturally, grounding each creature and giving the entire scene a wild, timeless feel as if observing a peaceful moment in the vast, open landscape of the African plains.",
  },
  {
    id: 10,
    title: "Mosaic Pattern",
    materials: "Colored origami paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F10.png?alt=media&token=af01b96b-0bf6-4c39-a3a1-bcd8a1f98a2f",
    description:
      " For this project, I wanted to bring awareness to my culture using traditional colors such as red, yellow, blue, and green. I wanted to portray the evenness and beauty in the harmony of color. For each square, I used four sheets of paper, connecting them so it looks like one individual square. All these squares connect to form a harmony of colors and patterns. ",
  },
  {
    id: 11,
    title: "Unknown Influences",
    materials: "Plaster Sheets, Acrylic paint, canvas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F20.png?alt=media&token=50480f17-5190-4078-acb5-bc486719850b ",
    description:
      " Each mask is made from my family’s faces. This project shows the influences of other people on you. The mask attached to the heart is the main person and all the other masks represent different people. You don’t know who these people are because you can’t see their faces. There is even a mask underneath the canvas. For this project, I wanted to bring awareness to the outside influences other people may have on you. It may be so stressful that it can even lead to your heart exploding out of your body. ",
  },
  {
    id: 12,
    title: "Living Tradition",
    materials: "Korean folk paint on rice paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F12.png?alt=media&token=c0096c7a-800a-4d5c-b105-e330dba221b2",
    description:
      "This project focuses on Korean traditional furniture. It represents life, with the blooming flowers, bamboo, richness in color, and sturdy base. All essential items such as food but also paintbrushes for writing come together in this sturdy base. Each stroke is delicately done, with thin strokes for outlines. ",
  },
  {
    id: 13,
    title: "Colored Squares",
    materials:
      "Acrylic paint, Acrylic marker, Sharpie, pencil on illustration board",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F13.png?alt=media&token=148ef621-f037-474d-887e-64e6c9b69a83",
    description:
      "I was inspired by my neurodivergent cousin and his beautiful paintings. He uses simple colors to convey his emotion and meaning. I have taken this concept and applied it to my work, creating a visual representation of his painting with all the colored squares in his mind, and deciding on what color to use. The squares are the palette and he expresses the colors in his drawing. I wanted to showcase the power of simplicity and color.",
  },
  {
    id: 14,
    title: "Living Carp",
    materials: "Korean folk paint on canvas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F14.png?alt=media&token=589f312e-3fa6-421c-b211-c0c6382ad1b5",
    description: "In this Minhwa painting, I depicted carp swimming gracefully, using bold, flowing brushstrokes to capture their lively movement. The carp has scales in shades of red and gold, creating a shimmering effect. The fish is painted with expressive, almost exaggerated lines, the body curving elegantly as it swims, symbolizing prosperity and perseverance. I added swirling black lines and bamboo, echoing life and harmony.",
  },
  {
    id: 15,
    title: "Geometric Shapes 2.0",
    materials: "Colored Origami paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F15.png?alt=media&token=7252a480-f2d4-4407-b89e-3010942cfa1b",
    description: "This piece shows the compilation of 3-D figures, miniature cakes, shapes, and more. Each piece required multiple sheets of paper and connection. I carefully chose each color thinking of the balance and contrast. Creating the miniature cakes in the front, required using tweezers for twisting the tiny roses. ",},
  {
    id: 16,
    title: "Scrap",
    materials: "Colored Origami paper on graph paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F16.png?alt=media&token=dee983ad-4538-4482-aeab-f27b7e0cdc9a",
    description: "A scrap is a scrapbook showing the steps to make an origami creation. Each step along the way is shown with attention to detail shown on the lines. It is important to follow the directions as skipping a step will lead to an incorrect figure. This is the importance of scraps. It can guide you in the right direction and allow you to go back if you are stuck while folding origami. ",
  },
  {
    id: 17,
    title: "Changing Seasons Rendering",
    materials: "Pastel on paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F17.png?alt=media&token=3aa9b521-b711-4e0f-987c-e20b708c7f63",
    description: "For this project, I depicted the changing of seasons through a series of elegant dresses. The spring figure is adorned in a light, floral-patterned dress with soft pastel colors, capturing the essence of blooming flowers and fresh growth. For summer, the woman wears a vibrant, sun-kissed dress in bright yellows and blues, with a sunflower that evokes the warmth of sunny days. She has a wide-brimmed hat, completing her lively look. In the autumn representation, the woman dons a rich, earthy-toned dress with deep reds, burnt oranges, and golden yellows, reminiscent of falling leaves. Finally, the winter figure is clad in a sophisticated, long-sleeved dress in deep blues, reminiscent of icy landscapes. Together, these figures create a stunning visual narrative, showcasing the beauty and uniqueness of each season through their dresses, colors, and accessories.",
  },
  {
    id: 18,
    title: "Pencil Still Life",
    materials: "Pencil on paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F18.png?alt=media&token=0317c28f-e58c-4ae4-9157-bae24bd144b2",
    description: "Exploring numerous mediums, I wanted to jump back into the basics, the foundational skills that I built from a very young age. I decided to sketch typical household items such as curtain rods, shoes, and makeup, but also my favorite animal, a butterfly. I wanted to showcase a much more straightforward piece with this still-life pencil drawing. ",
  },
  {
    id: 19,
    title: "Colored Pencil Renderings",
    materials: "Colored pencil on paper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F19.png?alt=media&token=2a407e0f-c372-4600-b8e5-8ce6f722b278",
    description: "While exploring multiple mediums, I came across colored pencils which have the ability to express and portray color intricately. I came across a book with famous paintings and I came across Giuseppe Arcimboldo’s paintings. I was intrigued by the use of color, making it seem as if the art came to life. I wanted to portray the liveliness of fruits and vegetables. In the picture on the right, I brought to attention the beauty of nature and birds. Different animals live in the same habitat but they can coexist in peace. ",
  },
  {
    id: 20,
    title: "The Heart Going Through Struggle",
    materials: "Clay, wire",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F11.png?alt=media&token=22c7f76b-43e8-4657-87ae-94b611d6352a",
    description: "For this project, I crafted a heart out of clay, its surface textured and uneven, symbolizing the imperfections and challenges of life. Each hole represents the pain and struggle it received. From its sides, thin, twisted wires emerge, curling and spiraling outward in chaotic directions, representing struggle and conflict. Some wires are taut, suggesting tension, while others hang loosely, depicting moments of release and vulnerability. The interplay of clay and wire creates a striking contrast, embodying the heart's strength alongside its fragility. This piece captures the complex emotions associated with struggle, emphasizing that even in hardship, there is beauty and a story to be told.",
  },
  {
    id: 21,
    title: "The Speaking Rooster",
    materials: "Korean folk paint on canvas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F21.png?alt=media&token=d63c98e9-a289-465d-8151-8612ca650315",
    description: " In this Minhwa-style painting, I depicted a vibrant rooster, a symbol of fortune and vigilance in Korean culture. The rooster is rendered with bold, expressive brushstrokes, showcasing its striking plumage in rich reds, deep golds, and hints of green. Each feather is carefully detailed, with curved patterns that convey movement and energy as if the rooster is poised to crow at dawn. Its proud stance and elongated neck exude confidence, and the bright comb atop its head is painted with lively strokes that highlight its texture. The background is simple, allowing the rooster to stand out as the focal point, embodying not just beauty, but also the spirited essence of life in traditional Korean art.",
  },
  {
    id: 22,
    title: "Can I Bloom?",
    materials: "clay, wire, faux flowers",
    image:
      "https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F22.png?alt=media&token=f14a75eb-c3e1-4e07-8972-5dd2096528fa",
    description: " I created a clay sculpture of a torso, capturing the essence of human form and resilience. The torso is textured and organic, with earthy tones of terracotta and subtle washes of greens and blues that symbolize growth. From the center of the torso, thin, delicate wires emerge, curling outward like vines, representing the struggles and challenges one faces. These wires twist and turn, some even tangling, illustrating the complexities of life and personal battles. Interspersed among the wires are vibrant flowers, blooming with exuberance. These flowers contrast beautifully against the earthy clay, symbolizing hope and renewal. They seem to thrive despite the surrounding chaos, embodying the idea that beauty and growth can emerge even in the most difficult times. The overall composition conveys a powerful message of resilience, where the human spirit continues to bloom, highlighting the intricate relationship between struggle and personal growth.",  },
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
          <img
            src={item.image}
            alt={item.title}
            className="description-image"
          />
          <div className="description-text">
            <h2>{item.title}</h2>
            <p>{item.materials}</p>
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
