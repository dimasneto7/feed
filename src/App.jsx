import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/dimasneto7.png",
      name: "Dimas Neto",
      role: "Dev Front-end",
    },
    content: [
      { type: "paragraph", content: "Hey guys!!!" },
      {
        type: "paragraph",
        content:
          "I just added another project to my portfolio. it's a project using Vite and React Js",
      },
      { type: "link", content: "isabella.com/react-feed" },
    ],
    publishedAt: new Date("2023-02-10 16:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/filipedeschamps.png",
      name: "Felipe Deschamps",
      role: "Dev Full Stack",
    },
    content: [
      { type: "paragraph", content: "Hey guys!!!" },
      {
        type: "paragraph",
        content:
          "I just added another project to my portfolio. it's a project using Vite and React Js",
      },
      { type: "link", content: "felipe.com/react-feed" },
    ],
    publishedAt: new Date("2023-02-12 16:00:00"),
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts &&
            posts.map((post) => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  key={post.id}
                />
              );
            })}
        </main>
      </div>
    </div>
  );
}
