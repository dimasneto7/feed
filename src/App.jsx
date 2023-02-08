import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";

import "./global.css";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Dimas Ferreira"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, eos? Quis consequatur est dolore incidunt ipsum, non itaque impedit vel. Beatae sunt quasi suscipit necessitatibus? Dignissimos vero quidem nemo. Eligendi."
          />
        </main>
      </div>
    </div>
  );
}
