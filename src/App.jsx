import "./styles.css";

import { Post } from "./Post";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Post
        author="Dimas Ferreira"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, eos? Quis consequatur est dolore incidunt ipsum, non itaque impedit vel. Beatae sunt quasi suscipit necessitatibus? Dignissimos vero quidem nemo. Eligendi."
      />
      <Post
        author="Isabella"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, eos? Quis consequatur est dolore incidunt ipsum, non itaque impedit vel. Beatae sunt quasi suscipit necessitatibus? Dignissimos vero quidem nemo. Eligendi."
      />
    </div>
  );
}
